import { Router } from "express";

import validate from "../middleware/validate.js";

import { challenge } from "../controllers/admin.controller.js";

import { challengeSchema } from "../validators/admin.validator.js";

import { challengeLimiter } from "../middleware/security.js";

const router = Router();

router.post("/challenge", challengeLimiter, validate(challengeSchema), challenge);

export default router;
