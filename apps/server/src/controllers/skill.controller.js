import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getSkills,
  getSkillById,
  getCategories,
} from "../services/skill.service.js";

export const getAllSkills = asyncHandler(async (req, res) => {
  const skills = await getSkills(req.query.category);

  res

    .status(HTTP_STATUS.OK)

    .json(
      new ApiResponse(
        HTTP_STATUS.OK,

        skills,

        "Skills retrieved successfully",
      ),
    );
});

export const getSkill = asyncHandler(async (req, res) => {
  const skill = await getSkillById(req.params.id);

  res

    .status(HTTP_STATUS.OK)

    .json(
      new ApiResponse(
        HTTP_STATUS.OK,

        skill,

        "Skill retrieved successfully",
      ),
    );
});

export const getSkillCategories = asyncHandler(async (req, res) => {
  const categories = await getCategories();

  res

    .status(HTTP_STATUS.OK)

    .json(
      new ApiResponse(
        HTTP_STATUS.OK,

        categories,

        "Categories retrieved successfully",
      ),
    );
});
