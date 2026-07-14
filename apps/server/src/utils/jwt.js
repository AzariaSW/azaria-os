import jwt from "jsonwebtoken";

import authConfig from "../config/auth.config.js";
import ApiError from "./ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

export function sign(payload, expiresIn) {
  return jwt.sign(payload, authConfig.jwtSecret, { expiresIn });
}

export function verify(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Token expired.");
    }

    if (error.name === "JsonWebTokenError") {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Invalid token.");
    }

    throw error;
  }
}

export function decode(token) {
  return jwt.decode(token);
}
