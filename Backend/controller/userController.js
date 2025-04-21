import bcryptjs from "bcryptjs";
import mongoose from "mongoose";
import fs from "fs";

import { user } from "../models/userModel.js";

import {
  sendVerificationEmail,
  welcomeEmail,
} from "../utils/sendEmailService.js";

import { cloudinary } from "../utils/cloudinary.js";

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
        .json({ message: "All fields required", error: true, success: false });
    }

    const userExist = await user.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "User already exist, with this email",
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

    const clearCookieOption = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      domain: process.env.COOKIE_DOMAIN || undefined,
    };

    res.clearCookie("accessToken", clearCookieOption);

    res.clearCookie("refreshToken", clearCookieOption);

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
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    return res.status(500).json({
      message: error.message || "Logout failed",
      error: true,
      success: false,
      data: null,
    });
  }
};

export const avatarUpload = async (req, res) => {
  try {
    const userId = req.userId;
    const images = req.files;
    const imgArr = [];

    if (!images || images.length === 0) {
      return res.status(400).json({
        message: "No files uploaded",
        success: false,
      });
    }

    // deleting the old avatar that is present already
    const User = await user.findOne({ _id: userId });

    if (!User) {
      return res
        .status(400)
        .json({ message: "User not found", error: true, success: false });
    }

    // 3. If previous avatar exists, delete from Cloudinary
    if (User.avatar) {
      const urlArr = User.avatar.split("/");
      const avatar_img = urlArr[urlArr.length - 1];
      const imageName = avatar_img.split(".")[0];

      if (imageName) {
        await cloudinary.uploader.destroy(`levelup_avatar/${imageName}`);
      }
    }

    const options = {
      use_filename: true,
      unique_filename: true,
      overwrite: false,
      folder: "levelup_avatar",
    };

    for (const img of images) {
      const result = await cloudinary.uploader.upload(img.path, options);
      imgArr.push(result.secure_url);

      // Delete local file after upload
      fs.unlinkSync(img.path);
    }

    // 5. Save new avatar URL in user document
    User.avatar = imgArr[0];
    await User.save();

    return res.status(200).json({
      _id: userId,
      avatar: imgArr[0], // Send first image
      message: "Avatar uploaded successfully",
      success: true,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    return res.status(500).json({
      message: error.message || "Avatar upload failed",
      error: true,
      success: false,
    });
  }
};

export const removeImgfromCloudinary = async (req, res) => {
  try {
    const imgurl = req.query.img;
    const urlArr = imgurl.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];
    if (imageName) {
      const result = await cloudinary.uploader.destroy(imageName);
      if (result) {
        res.status(200).send(result);
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: true, success: false });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { email, name, password, mobileNo } = req.body;
    const isUserExist = await user.findById(userId);

    if (!isUserExist) {
      return res
        .status(400)
        .json({ message: "User Not Found", error: true, success: false });
    }

    // If email is changed
    if (email && email !== isUserExist.email) {
      const verificationCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      const hashedOtp = await bcryptjs.hash(verificationCode, 10);
      const otpExpireTime = Date.now() + 10 * 60 * 1000; // 10 minutes

      isUserExist.email = email;
      isUserExist.otp = hashedOtp;
      isUserExist.otpExpiresAt = otpExpireTime;
      isUserExist.isEmailVerified = false;

      // Send OTP to the new email
      await sendVerificationEmail(email, name, verificationCode);
    }

    let hashedPassword;
    if (password) {
      hashedPassword = await bcryptjs.hash(password, 10);
    }
    if (hashedPassword) isUserExist.password = hashedPassword;

    // Now update name, mobile, and password (if given)
    isUserExist.name = name || isUserExist.name;
    isUserExist.mobileNo = mobileNo || isUserExist.mobileNo;

    await isUserExist.save();

    return res.status(200).json({
      message:
        "Profile updated successfully. Please verify new email if changed.",
      success: true,
      user: {
        name: isUserExist.name,
        email: isUserExist.email,
        mobileNo: isUserExist.mobileNo,
        isEmailVerified: isUserExist.isEmailVerified,
      },
    });
  } catch (error) {
    console.log("Error while updating profile:- ", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: true, success: false });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is Required" });
    }

    const isUserFound = await user.findOne({ email });

    if (!isUserFound) {
      return res.status(400).json({ message: "User not Found" });
    }

    const verificationCode = Math.floor(
      10000 + Math.random() * 900000
    ).toString();

    const salt = await bcryptjs.genSalt(10);
    const hashedVerificationCode = await bcryptjs.hash(verificationCode, salt);

    isUserFound.forgotPasswordOtp = hashedVerificationCode;
    isUserFound.forgotPasswordExpiry = Date.now() + 10 * 60 * 1000;
    await isUserFound.save();

    await sendVerificationEmail(email, isUserFound?.name, verificationCode);

    return res.status(200).json({
      message: "Forgot Password OTP has been sent to your email",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const verifyForgotPassword = async (req, res) => {
  try {
    const { email, forgotPasswordOtp } = req.body;
    if (!email || !forgotPasswordOtp) {
      return res
        .status(400)
        .json({ message: "Please Provide Necessary Fields" });
    }

    const isUserFound = await user.findOne({ email });

    if (!isUserFound) {
      return res
        .status(400)
        .json({ message: "User Not Found with this E-mail" });
    }

    const decodeOTP = await bcryptjs.compare(
      forgotPasswordOtp,
      isUserFound.forgotPasswordOtp
    );

    const currentTime = new Date().toISOString;

    if (!decodeOTP || isUserFound.forgotPasswordExpiry < currentTime) {
      return res
        .status(400)
        .json({ message: "OTP does not matched or OTP gets Expired" });
    }

    isUserFound.forgotPasswordOtp = null;
    isUserFound.forgotPasswordExpiry = null;

    await isUserFound.save();

    return res.status(200).json({
      message: "Forgot Password OTP verified",
      error: false,
      success: true,
    });
  } catch (error) {
    console.error("OTP Verification Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message || error,
      success: false,
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword, confirmPassword } = req.body;

    if (!email || !newPassword || !confirmPassword) {
      return res.status(400).json({
        message: "All fields are required",
        error: true,
        success: false,
      });
    }

    const userFound = await user.findOne({ email });

    if (!userFound) {
      return res.status(404).json({
        message: "User not Found",
        error: true,
        success: false,
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        message: "new password and confirm password must be same",
        error: true,
        success: false,
      });
    }

    const isSamePassword = await bcryptjs.compare(
      newPassword,
      userFound.password
    );
    if (isSamePassword) {
      return res.status(400).json({
        message: "New password must be different from the current password",
        error: true,
        success: false,
      });
    }

    const hashedNewPassword = await bcryptjs.hash(newPassword, 10);

    userFound.password = hashedNewPassword;
    await userFound.save();

    return res.status(200).json({
      message: "Password Reset Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message || error,
      success: false,
    });
  }
};
