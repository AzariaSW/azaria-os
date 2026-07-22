import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getAllCertificates as getAllCertificatesService,
  getCertificate as getCertificateService,
  createCertificate as createCertificateService,
  updateCertificate as updateCertificateService,
  deleteCertificate as deleteCertificateService,
} from "../services/certificate.service.js";

export const getAllCertificates = asyncHandler(async (req, res) => {
  const certificates = await getAllCertificatesService(req.query);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      certificates,

      "Certificates retrieved successfully",
    ),
  );
});

export const getCertificate = asyncHandler(async (req, res) => {
  const certificate = await getCertificateService(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      certificate,

      "Certificate retrieved successfully",
    ),
  );
});

export const createCertificate = asyncHandler(async (req, res) => {
  const data = { ...req.validated.body }
  const certificate = await createCertificateService(data, req.files ?? []);

  res.status(HTTP_STATUS.CREATED).json(
    new ApiResponse(
      HTTP_STATUS.CREATED,

      certificate,

      "Certificate created successfully",
    ),
  );
});

export const updateCertificate = asyncHandler(async (req, res) => {
  const data = { ...req.validated.body }
  const certificate = await updateCertificateService(data, req.params.id, req.files ?? []);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      certificate,

      "Certificate updated successfully",
    ),
  );
});

export const deleteCertificate = asyncHandler(async (req, res) => {
  const certificate = await deleteCertificateService(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      certificate,

      "Certificate deleted successfully",
    ),
  );
});
