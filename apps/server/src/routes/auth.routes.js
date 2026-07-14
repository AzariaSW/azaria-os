import { Router } from "express";

import validate from "../middleware/validate.js";

import { login, challenge } from "../controllers/auth.controller.js";

import { loginSchema, challengeSchema } from "../validators/auth.validator.js";

import { loginLimiter, challengeLimiter } from "../middleware/security.js";

const router = Router();

router.post(
  "/challenge",
  challengeLimiter,
  validate(challengeSchema),
  challenge,
);

router.post(
  "/login", 
  loginLimiter, 
  validate(loginSchema), 
  login
);

export default router;
