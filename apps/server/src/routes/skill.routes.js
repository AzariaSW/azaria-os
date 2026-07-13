import { Router } from "express";

import {
  getAllSkills,
  getSkill,
  getSkillCategories,
} from "../controllers/skill.controller.js";

const router = Router();

router.get("/", getAllSkills);

router.get("/categories", getSkillCategories);

router.get("/:id", getSkill);

export default router;
