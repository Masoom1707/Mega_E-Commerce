import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please enter password"],
    },
    avatar: {
      type: String,
      default: "",
    },
    mobileNo: {
      type: Number,
      default: null,
    },
    refreshToken: {
      type: String,
      default: "",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    lastLoggedIn: {
      type: Date,
      default: "",
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Suspened"],
      default: "Active",
    },
    addressDetails: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "address",
      },
    ],
    shoppingCart: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "cartProduct",
      },
    ],
    orderHistory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "order",
      },
    ],
    forgotPasswordOtp: {
      type: String,
      default: null,
    },
    forgotPasswordExpiry: {
      type: Date,
      default: "",
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
  },
  { timestamps: true }
);

export const user = mongoose.model("user", userSchema);
