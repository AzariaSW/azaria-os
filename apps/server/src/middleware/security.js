import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import env from "../config/env.js";

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
  windowMs: 15 * 60 * 1000,

  max: 100,

  standardHeaders:true,

  legacyHeaders:false,

  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});
