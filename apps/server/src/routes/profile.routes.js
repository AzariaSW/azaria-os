import { Router } from "express";

import { getMyProfile } from "../controllers/profile.controller.js";

const router = Router();

router.get("/", getMyProfile);

export default router;
