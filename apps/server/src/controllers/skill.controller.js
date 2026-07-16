import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getAllSkills as getAllSkillsService,
  getSkill as getSkillService,
  getSkillCategories as getSkillCategoriesService,
  createSkill as createSkillService,
  updateSkill as updateSkillService,
  deleteSkill as deleteSkillService,
} from "../services/skill.service.js";

export const getAllSkills = asyncHandler(async (req, res) => {
  const skills = await getAllSkillsService(req.query.category);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      skills,

      "Skills retrieved successfully",
    ),
  );
});

export const getSkill = asyncHandler(async (req, res) => {
  const skill = await getSkillService(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      skill,

      "Skill retrieved successfully",
    ),
  );
});

export const getSkillCategories = asyncHandler(async (req, res) => {
  const categories = await getSkillCategoriesService();

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      categories,

      "Categories retrieved successfully",
    ),
  );
});

export const createSkill = asyncHandler(async (req, res) => {
  const skill = await createSkillService(req.body);

  res.status(HTTP_STATUS.CREATED).json(
    new ApiResponse(
      HTTP_STATUS.CREATED,

      skill,

      "Skill created successfully",
    ),
  );
});

export const updateSkill = asyncHandler(async (req, res) => {
  const skill = await updateSkillService(req.body, req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      skill,

      "Skill updated successfully",
    ),
  );
});

export const deleteSkill = asyncHandler(async (req, res) => {
  const skill = await deleteSkillService(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      skill,

      "Skill deleted successfully",
    ),
  );
});
