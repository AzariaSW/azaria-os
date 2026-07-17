import { Router } from "express";

import {
  updateProfile,
  getProfile,
} from "../controllers/profile.controller.js";
import { updateProfileSchema } from "../validators/profile.validator.js";
import authenticateAdmin from "../middleware/authenticateAdmin.js";
import validate from "../middleware/validate.js";
import { imageUploader } from "../middleware/upload.js";
import { UPLOAD } from "../config/upload.config.js";

const router = Router();

router.get("/", getProfile);

router.put(
  "/",
  authenticateAdmin,
  imageUploader(UPLOAD.DESTINATIONS.PROFILE).single("profileImage"),
  validate(updateProfileSchema),
  updateProfile,
);

export default router;
