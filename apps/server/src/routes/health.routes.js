import { Router } from "express";
import { CheckDatabase } from "../controllers/health.controller.js";

const router = Router();

router.get("/", CheckDatabase);

export default router;
