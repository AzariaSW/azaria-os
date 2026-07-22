import { Router } from "express";

import {
  updateProfile,
  getProfile,
} from "../controllers/profile.controller.js";
import { updateProfileSchema } from "../validators/profile.validator.js";
import authenticateAdmin from "../middleware/authenticateAdmin.js";
import validate from "../middleware/validate.js";
import { uploader, handleUpload } from "../middleware/upload.js";

const router = Router();

router.get("/", getProfile);

router.put(
  "/",
  authenticateAdmin,
  handleUpload(
    uploader.fields([
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
