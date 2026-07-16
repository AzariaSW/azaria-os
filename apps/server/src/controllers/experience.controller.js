import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getAllExperiences as getAllExperiencesService,
  getExperience as getExperienceService,
  getExperienceRoles as getExperienceRolesService,
  createExperience as createExperienceService,
  updateExperience as updateExperienceService,
  deleteExperience as deleteExperienceService,
} from "../services/experience.service.js";

export const getAllExperiences = asyncHandler(async (req, res) => {
  const experiences = await getAllExperiencesService(req.query);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      experiences,

      "Experiences retrieved successfully",
    ),
  );
});

export const getExperience = asyncHandler(async (req, res) => {
  const experience = await getExperienceService(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      experience,

      "Experience retrieved successfully",
    ),
  );
});

export const getExperienceRoles = asyncHandler(async (req, res) => {
  const roles = await getExperienceRolesService();

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      roles,

      "Roles retrieved successfully",
    ),
  );
});

export const createExperience = asyncHandler(async (req, res) => {
  const experience = await createExperienceService(req.validated.body);

  res.status(HTTP_STATUS.CREATED).json(
    new ApiResponse(
      HTTP_STATUS.CREATED,

      experience,

      "Experience created successfully",
    ),
  );
});

export const updateExperience = asyncHandler(async (req, res) => {
  const experience = await updateExperienceService(req.validated.body, req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      experience,

      "Experience updated successfully",
    ),
  );
});

export const deleteExperience = asyncHandler(async (req, res) => {
  const experience = await deleteExperienceService(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      experience,

      "Experience deleted successfully",
    ),
  );
});
