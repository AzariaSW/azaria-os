import { Router } from "express";

import healthRoutes from "../health.routes.js";
import projectRoutes from "../project.routes.js";
import profileRoutes from "../profile.routes.js";
import skillRoutes from "../skill.routes.js";
import githubRoutes from "../github.routes.js";
import contactRoutes from "../contact.routes.js";
import authRoutes from "../auth.routes.js";
import verifyRoutes from "../test.routes.js";



const router = Router();

router.use("/test", verifyRoutes);

router.use("/health", healthRoutes);

router.use("/projects", projectRoutes);

router.use("/profile", profileRoutes);

router.use("/skills", skillRoutes);

router.use("/github", githubRoutes);

router.use("/contact", contactRoutes);

router.use("/auth", authRoutes);

export default router;
