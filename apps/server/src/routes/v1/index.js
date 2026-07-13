import { Router } from "express";

import healthRoutes from "../health.routes.js";
import projectRoutes from "../project.routes.js";
import profileRoutes from "../profile.routes.js";
import skillRoutes from "../skill.routes.js";

const router = Router();

router.use("/health", healthRoutes);

router.use("/projects", projectRoutes);

router.use("/profile", profileRoutes);

router.use("/skills", skillRoutes);

export default router;
