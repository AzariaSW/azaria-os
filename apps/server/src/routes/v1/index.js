import { Router } from "express";

import healthRoutes from "../health.routes.js";
import projectRoutes from "../project.routes.js";
import profileRoutes from "../profile.routes.js";
import skillRoutes from "../skill.routes.js";
import githubRoutes from "../github.routes.js";
import contactRoutes from "../contact.routes.js";
import authRoutes from "../auth.routes.js";
import testRoutes from "../test.routes.js";
import experienceRoutes from "../experience.routes.js";
import educationRoutes from "../education.routes.js";
import certificateRoutes from "../certificate.routes.js";


const router = Router();

router.use("/test", testRoutes);

router.use("/health", healthRoutes);

router.use("/project", projectRoutes);

router.use("/profile", profileRoutes);

router.use("/skill", skillRoutes);

router.use("/github", githubRoutes);

router.use("/contact", contactRoutes);

router.use("/auth", authRoutes);

router.use("/experience", experienceRoutes);

router.use("/education", educationRoutes);

router.use("/certificate", certificateRoutes);

export default router;
