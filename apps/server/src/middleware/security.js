import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

import env from "../config/env.js";
import auth from "../config/auth.config.js";
import appConfig from "../config/app.config.js";

export const securityMiddleware = [
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  }),

  cors({
    origin(origin, callback) {
      const allowedOrigins = [env.CLIENT_URL, "http://localhost:5173"];

      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },

    credentials: true,
  }),
];

export const limiter = rateLimit({
  windowMs: appConfig.LIMIT.Time,
  max: appConfig.LIMIT.MaxAttempt,
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many contact requests. Please try again later.",
  },
});

export const challengeLimiter = rateLimit({
  windowMs: auth.ChallengeLimit.Time,
  max: auth.ChallengeLimit.MaxAttempt,
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many challenge attempts.",
  },
});

export const loginLimiter = rateLimit({
  windowMs: auth.LoginLimit.Time,
  max: auth.LoginLimit.MaxAttempt,
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many login attempts.",
  },
});
