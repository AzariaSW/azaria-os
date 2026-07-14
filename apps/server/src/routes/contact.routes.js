import { Router } from "express";

import validate from "../middleware/validate.js";

import { sendMessage } from "../controllers/contact.controller.js";
import { contactLimiter } from "../middleware/security.js";
import { contactSchema } from "../validators/contact.validator.js";

const router = Router();

router.post("/", contactLimiter, validate(contactSchema), sendMessage);

export default router;
