import { Router } from "express";

import { updateProfile, getMyProfile } from "../controllers/profile.controller.js";
import { updateProfileSchema } from "../validators/profile.validator.js";
import authenticateAdmin from "../middleware/authenticateAdmin.js";
import validate from "../middleware/validate.js";

const router = Router();

router.get("/", getMyProfile);

router.put(
  "/",
  authenticateAdmin,
  validate(updateProfileSchema),
  updateProfile,
);

export default router;
