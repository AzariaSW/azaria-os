import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getAllEducations as getAllEducationsService,
  getEducation as getEducationService,
  getEducationDegrees as getEducationDegreesService,
  createEducation as createEducationService,
  updateEducation as updateEducationService,
  deleteEducation as deleteEducationService,
} from "../services/education.service.js";

export const getAllEducations = asyncHandler(async (req, res) => {
  const educations = await getAllEducationsService(req.query.role);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      educations,

      "Educations retrieved successfully",
    ),
  );
});

export const getEducation = asyncHandler(async (req, res) => {
  const education = await getEducationService(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      education,

      "Experience retrieved successfully",
    ),
  );
});

export const getEducationRoles = asyncHandler(async (req, res) => {
  const degrees = await getEducationDegreesService();

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      degrees,

      "Degrees retrieved successfully",
    ),
  );
});

export const createEducation = asyncHandler(async (req, res) => {
  const education = await createEducationService(req.validated.body);

  res.status(HTTP_STATUS.CREATED).json(
    new ApiResponse(
      HTTP_STATUS.CREATED,

      education,

      "Education created successfully",
    ),
  );
});

export const updateEducation = asyncHandler(async (req, res) => {
  const education = await updateEducationService(req.validated.body, req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      education,

      "Education updated successfully",
    ),
  );
});

export const deleteEducation = asyncHandler(async (req, res) => {
  const education = await deleteEducationService(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      education,

      "Education deleted successfully",
    ),
  );
});
