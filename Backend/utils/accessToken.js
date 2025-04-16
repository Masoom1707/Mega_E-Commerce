import jwt from "jsonwebtoken";

export const generateAccessToken = async (userId) => {
  try {
    const token = jwt.sign({ _id: userId }, process.env.SECRET_ACCESS_KEY, {
      expiresIn: "30m",
    });
    return token;
  } catch (error) {
    throw new Error(error.message || "Failed to generate access token")
  }
};
