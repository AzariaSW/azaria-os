import { Router } from "express";

import validate from "../middleware/validate.js";

import {
  getAllEducations,
  getEducationRoles,
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation
} from "../controllers/education.controller.js";

import authenticateAdmin from "../middleware/authenticateAdmin.js";

import { educationSchema, updateEducationSchema, idSchema } from "../validators/education.validator.js";

const router = Router();

router.get("/", getAllEducations);

router.get("/degrees", getEducationRoles);

router.get("/:id", validate(idSchema), getEducation);

router.post(
    "/",
    authenticateAdmin,
    validate(educationSchema),
    createEducation
);

router.put(
    "/:id",
    authenticateAdmin,
    validate(updateEducationSchema),
    updateEducation
);

router.delete(
    "/:id",
    authenticateAdmin,
    validate(idSchema),
    deleteEducation
);

export default router;