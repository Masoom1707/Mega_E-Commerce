import express from "express";
import {
  avatarUpload,
  forgotPassword,
  loginController,
  logoutController,
  registerUser,
  removeImgfromCloudinary,
  resetPassword,
  updateProfile,
  verifyEmail,
  verifyForgotPassword,
} from "../controller/userController.js";

import { authMiddleware } from "../middleware/userAuth.js";
import { upload } from "../middleware/multer.js";

export const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/verify-email", verifyEmail);
userRouter.post("/login", loginController);
userRouter.post("/logout", authMiddleware, logoutController);

userRouter.put(
  "/profile-upload",
  authMiddleware,
  upload.array("avatar", 1), // max 1 image
  avatarUpload
);
userRouter.delete("/delete-image", authMiddleware, removeImgfromCloudinary);
userRouter.put("/:id/update", authMiddleware, updateProfile);

userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/verify-forgot-password", verifyForgotPassword);
userRouter.post("/reset-password", resetPassword);
