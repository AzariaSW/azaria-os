import { Router } from "express";

import validate from "../middleware/validate.js";
import authenticateAdmin from "../middleware/authenticateAdmin.js";
import {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";

import { uploader, handleUpload } from "../middleware/upload.js";

import {
  updateProjectSchema,
  idSchema,
  projectSchema,
} from "../validators/project.validator.js";

const router = Router();

router.get("/", getAllProjects);

router.get("/:id", validate(idSchema), getProject);

router.post(
  "/",
  authenticateAdmin,
  handleUpload(uploader.array("images", 20)),
  validate(projectSchema),
  createProject,
);

router.put(
  "/:id",
  authenticateAdmin,
  handleUpload(uploader.array("images", 20)),
  validate(updateProjectSchema),
  updateProject,
);

router.delete("/:id", authenticateAdmin, validate(idSchema), deleteProject);

export default router;
