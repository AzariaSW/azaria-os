import { Router } from "express";

import {
  getGithubProfile,
  getRepositories,
  getRecentActivity,
} from "../controllers/github.controller.js";

const router = Router();

router.get("/profile", getGithubProfile);

router.get("/repositories", getRepositories);

router.get("/activity", getRecentActivity);

export default router;