import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getSkills,
  getSkillById,
  getCategories,
  createSkills,
  updateSkills,
  deleteSkills,
} from "../services/skill.service.js";

export const getAllSkills = asyncHandler(async (req, res) => {
  const skills = await getSkills(req.query.category);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      skills,

      "Skills retrieved successfully",
    ),
  );
});

export const getSkill = asyncHandler(async (req, res) => {
  const skill = await getSkillById(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      skill,

      "Skill retrieved successfully",
    ),
  );
});

export const getSkillCategories = asyncHandler(async (req, res) => {
  const categories = await getCategories();

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      categories,

      "Categories retrieved successfully",
    ),
  );
});

export const createSkill = asyncHandler(async (req, res) => {
  const skills = await createSkills(req.body);

  res.status(HTTP_STATUS.CREATED).json(
    new ApiResponse(
      HTTP_STATUS.CREATED,

      skills,

      "Skill created successfully",
    ),
  );
});

export const updateSkill = asyncHandler(async (req, res) => {
  const skills = await updateSkills(req.body, req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      skills,

      "Skill updated successfully",
    ),
  );
});

export const deleteSkill = asyncHandler(async (req, res) => {
  const skills = await deleteSkills(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      skills,

      "Skill deleted successfully",
    ),
  );
});
