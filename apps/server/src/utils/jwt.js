import jwt from "jsonwebtoken";

import authConfig from "../config/auth.config.js";

export function sign(payload, expiresIn) {
  return jwt.sign(payload, authConfig.jwtSecret, { expiresIn });
}

export function verify(token) {
  return jwt.verify(token, authConfig.jwtSecret);
}
