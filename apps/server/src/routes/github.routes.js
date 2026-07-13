import { Router } from "express";

import {
  getProfile,
  getRepository,
  getActivity,
} from "../controllers/github.controller.js";

const router = Router();

router.get("/profile", getProfile);

router.get("/repositories", getRepository);

router.get("/activity", getActivity);

export default router;