import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import { user } from "../models/userModel.js";
import { sendVerificationEmail, welcomeEmail } from "../utils/sendEmailService.js";

export const registerUser = async (req, res) => {
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
    const hashedPassword = await bcryptjs.hash(password, salt);

    await sendVerificationEmail(email, name, verificationCode)

    const newUser = await user.create({
      name,
      email,
      password: hashedPassword,
      otp: verificationCode,
      otpExpiresAt: Date.now() + 10 * 60 * 1000 //! 10 mins of expiring
    });

    if (!newUser) {
      return res.status(400).json({
        message: "error while saving user",
        error: true,
        success: false,
      });
    }


    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.SECRET_CODE
    );

    if (!token) {
      return res.status(400).json({
        message: "token not generated",
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      message: "User Created Successfully",
      error: false,
      success: true,
      token
    });

    
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
};

export const verifyEmail = async(req, res) => {
  try {
  const {email, otp} = req.body
    const isUserFound = await user.findOne({email})
    if(!isUserFound){
      return res.status(400).json({
        message: "User Not Found",
        error: true,
        success: false,
      });
    }

    if(isUserFound.isEmailVerified){
      return res.status(400).json({
        message: "Email already verified.",
        error: true,
        success: false,
      });
    }


    const isCodeValid = isUserFound.otp === otp
    const isNotExpired = isUserFound.otpExpiresAt > Date.now()


    if(isCodeValid && isNotExpired){
      isUserFound.otp = null
      isUserFound.otpExpiresAt = null
      isUserFound.isEmailVerified = true
      await isUserFound.save()

      await welcomeEmail(isUserFound.name,email)

      return res.status(200).json({
        message: "Email Verified Successfully",
        error: false,
        success: true,
      });
    }else if(!isCodeValid){
      return res.status(400).json({
        message: "Invalid OTP",
        error: true,
        success: false,
      });
    }else{
      return res.status(400).json({
        message: "OTP Expired",
        error: true,
        success: false,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}