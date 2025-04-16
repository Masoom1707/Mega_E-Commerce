import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import { user } from "../models/userModel.js";
import {
  sendVerificationEmail,
  welcomeEmail,
} from "../utils/sendEmailService.js";
import { generateAccessToken } from "../utils/accessToken.js";
import { generateRefreshToken } from "../utils/refreshToken.js";


export const registerUser = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "all fields required", error: true, success: false });
    }

    const userExist = await user.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "user already exist, with this email",
        error: true,
        success: false,
      });
    }

    // generating 6 digit code
    const verificationCode = Math.floor(
      10000 + Math.random() * 900000
    ).toString();

    const salt = await bcryptjs.genSalt(10);

    const hashedVerificationCode = await bcryptjs.hash(verificationCode, salt);
    const hashedPassword = await bcryptjs.hash(password, salt);

    await sendVerificationEmail(email, name, verificationCode);

    const newUser = await user.create(
      [
        {
          name,
          email,
          password: hashedPassword,
          otp: hashedVerificationCode,
          otpExpiresAt: Date.now() + 10 * 60 * 1000, //! 10 mins of expiring
        },
      ],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({
      message: "User Created Successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    res
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "Email and OTP are required",
        error: true,
        success: false,
      });
    }

    const foundUser = await user
      .findOne({ email })
      .select("+otp +otpExpiresAt");

    if (!foundUser) {
      return res.status(404).json({
        message: "User Not Found",
        error: true,
        success: false,
      });
    }

    if (foundUser.isEmailVerified) {
      return res.status(409).json({
        message: "Email already verified.",
        error: true,
        success: false,
      });
    }

    if (!foundUser.otp || !foundUser.otpExpiresAt) {
      return res.status(400).json({
        message: "No OTP generated for this user",
        error: true,
        success: false,
      });
    }

    if (foundUser.otpExpiresAt < Date.now()) {
      return res.status(400).json({
        message: "OTP has expired. Please request a new one.",
        error: true,
        success: false,
      });
    }

    const isOTPValid = await bcryptjs.compare(otp, foundUser.otp);
    if (!isOTPValid) {
      return res.status(400).json({
        message: "Invalid OTP",
        error: true,
        success: false,
      });
    }

    const updatedUser = await user.findByIdAndUpdate(
      foundUser._id,
      {
        $set: { isEmailVerified: true },
        $unset: { otp: "", otpExpiresAt: "" },
      },
      { new: true }
    );

    welcomeEmail(foundUser.name, email).catch((err) =>
      console.error("Failed to send welcome email:", err)
    );

    return res.status(200).json({
      message: "Email verified successfully",
      error: false,
      success: true,
      data: {
        email: foundUser.email,
        isEmailVerified: true,
      },
    });
  } catch (error) {
    console.error("Email verification error:", error);
    return res.status(500).json({
      message: "An error occurred during email verification",
      error: true,
      success: false,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please Enter email and password",
        error: true,
        success: false,
      });
    }

    const isUserFound = await user.findOne({ email });

    if (!isUserFound || !isUserFound.isEmailVerified) {
      return res.status(400).json({
        message: "Invalid Email or Password",
        error: true,
        success: false,
      });
    }

    const comparePass = await bcryptjs.compare(password, isUserFound.password);

    if (!comparePass) {
      return res.status(400).json({
        message: "Invalid Email or Password",
        error: true,
        success: false,
      });
    }

    const accessToken = await generateAccessToken(isUserFound._id);
    const refreshToken = await generateRefreshToken(isUserFound.id);

     await user.findByIdAndUpdate(isUserFound?._id, {
      lastLoggedIn: new Date(),
      refreshToken: refreshToken,
    });

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    };

    res.cookie("accessToken", accessToken, cookieOptions);
    res.cookie("refreshToken", refreshToken, cookieOptions);

    return res.status(200).json({
      message: "User Successfully Logged-In",
      error: false,
      success: true,
      user: {
        id: isUserFound._id,
        name: isUserFound.name,
        email: isUserFound.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
};



export const logoutController = async (req, res) => {
  try {
    const userId = req.userId;

    console.log(userId);

    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      domain: process.env.COOKIE_DOMAIN || undefined,
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      domain: process.env.COOKIE_DOMAIN || undefined,
    });

     await user.findByIdAndUpdate(userId, {
      refreshToken: "",
    });

    // forcefully clearing the data from the client-side
    res.setHeader("Clear-Site-Data", '"cookies", "storage"');

    // for safari compatibility because safari is not supporting the above code
    const userAgent = req.headers["user-agent"];
    if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      res.send(`
    <script>
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = '/login';
    </script>
  `);
    }

    return res.status(200).json({
      message: "User logged out successfully from this device",
      error: false,
      success: true,
      data: null,
    });
  } catch (error) {

    res.clearCookie("accessToken", { path: "/auth/user" });
    res.clearCookie("refreshToken", { path: "/auth/user" });

    return res.status(500).json({
      message: error.message || "Logout failed",
      error: true,
      success: false,
      data: null,
    });
  }
};
