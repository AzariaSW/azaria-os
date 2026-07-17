import { Router } from "express";

import {
  updateProfile,
  getProfile,
} from "../controllers/profile.controller.js";
import { updateProfileSchema } from "../validators/profile.validator.js";
import authenticateAdmin from "../middleware/authenticateAdmin.js";
import validate from "../middleware/validate.js";
import { createUploader } from "../middleware/upload.js";
import { UPLOAD } from "../config/upload.config.js";

const uploadProfile = createUploader({
  folder: UPLOAD.DESTINATIONS.PROFILE,
  allowedTypes: UPLOAD.IMAGE_TYPES,
  maxSize: UPLOAD.MAX_IMAGE_SIZE,
});

const router = Router();

router.get("/", getProfile);

router.put(
  "/",
  
  uploadProfile.single("profileImage"),
  validate(updateProfileSchema),
  updateProfile,
);

export default router;
