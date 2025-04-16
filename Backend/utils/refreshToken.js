import jwt from "jsonwebtoken";

export const generateRefreshToken = async (userId) => {
  try {
    const token = jwt.sign(
      { _id: userId },
      process.env.SECRET_REFRESH_CODE,
      { expiresIn: "7d" }
    );

    return token;

  } catch (error) {
    throw new Error(error.message || "Failed to generate access token")
  }
};
