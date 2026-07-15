import { Router } from "express";

import validate from "../middleware/validate.js";

import {
  getAllExperiences,
  getExperienceRoles,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience
} from "../controllers/experience.controller.js";

import authenticateAdmin from "../middleware/authenticateAdmin.js";

import { experienceSchema, updateExperienceSchema, idSchema } from "../validators/experience.validator.js";

const router = Router();

router.get("/", getAllExperiences);

router.get("/roles", getExperienceRoles);

router.get("/:id", validate(idSchema), getExperience);

router.post(
    "/",
    authenticateAdmin,
    validate(experienceSchema),
    createExperience
);

router.put(
    "/:id",
    authenticateAdmin,
    validate(updateExperienceSchema),
    updateExperience
);

router.delete(
    "/:id",
    authenticateAdmin,
    validate(idSchema),
    deleteExperience
);

export default router;