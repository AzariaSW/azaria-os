import { Router } from "express";

import validate from "../middleware/validate.js";
import authenticateAdmin from "../middleware/auth.js";
import {   
  getAllProjects,
  getProject,
  getFeatured,
  createProject,
  updateProject,
  deleteProject
} from "../controllers/project.controller.js";

import { updateProjectSchema,projectIdSchema, projectSchema } from "../validators/project.validator.js";

const router = Router();

router.get("/", getAllProjects);

router.get("/featured", getFeatured);

router.get("/:id", getProject);

router.post(
    "/",
    authenticateAdmin,
    validate(projectSchema),
    createProject
);

router.put(
    "/:id",
    authenticateAdmin,
    validate(updateProjectSchema),
    updateProject
);

router.delete(
    "/:id",
    authenticateAdmin,
    validate(projectIdSchema),
    deleteProject
);

export default router;
