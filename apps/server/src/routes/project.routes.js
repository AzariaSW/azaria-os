import { Router } from "express";

import validate from "../middleware/validate.js";
import authenticateAdmin from "../middleware/authenticateAdmin.js";
import {   
  getAllProjects,
  getProject,
  getFeatured,
  createProject,
  updateProject,
  deleteProject
} from "../controllers/project.controller.js";

import { updateProjectSchema,idSchema, projectSchema } from "../validators/project.validator.js";

const router = Router();

router.get("/", getAllProjects);

router.get("/featured", getFeatured);

router.get("/:id", validate(idSchema), getProject);

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
    validate(idSchema),
    deleteProject
);

export default router;
