import { Router } from "express";

import {
  getAllProjects,
  getProject,
  getFeatured,
} from "../controllers/project.controller.js";

const router = Router();

router.get("/", getAllProjects);

router.get("/featured", getFeatured);

router.get("/:id", getProject);

export default router;
