import { Router } from "express";

import {
  updateProfile,
  getProfile,
} from "../controllers/profile.controller.js";
import { updateProfileSchema } from "../validators/profile.validator.js";
import authenticateAdmin from "../middleware/authenticateAdmin.js";
import validate from "../middleware/validate.js";
import { profileUploader, handleUpload } from "../middleware/upload.js";
import { UPLOAD } from "../config/upload.config.js";

const router = Router();

router.get("/", getProfile);

router.put(
  "/",
  authenticateAdmin,
  handleUpload(
    profileUploader.fields([
      {
        name: "profileImage",
        maxCount: 1,
      },
      {
        name: "resume",
        maxCount: 1,
      },
      {
        name: "cv",
        maxCount: 1,
      },
    ]),
  ),

  validate(updateProfileSchema),
  updateProfile,
);

export default router;
