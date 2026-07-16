import { Router } from "express";

import validate from "../middleware/validate.js";

import {
  getAllCertificates,
  getCertificate,
  createCertificate,
  updateCertificate,
  deleteCertificate
} from "../controllers/certificate.controller.js";

import authenticateAdmin from "../middleware/authenticateAdmin.js";

import { certificateSchema, updateCertificateSchema, idSchema } from "../validators/certificate.validator.js";

const router = Router();

router.get("/", getAllCertificates);

router.get("/:id", validate(idSchema), getCertificate);

router.post(
    "/",
    authenticateAdmin,
    validate(certificateSchema),
    createCertificate
);

router.put(
    "/:id",
    authenticateAdmin,
    validate(updateCertificateSchema),
    updateCertificate
);

router.delete(
    "/:id",
    authenticateAdmin,
    validate(idSchema),
    deleteCertificate
);

export default router;