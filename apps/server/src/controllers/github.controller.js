import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getGithubProfile,
  getRepositories,
  getRecentActivity,
} from "../services/github.service.js";

export const getActivity = asyncHandler(async (req, res) => {
  const activity = await getRecentActivity();

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,

        activity,

        "Projects retrieved successfully",
      ),
    );
});

export const getProfile = asyncHandler(async (req, res) => {
  const profile = await getGithubProfile();

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,

        profile,

        "Profile retrieved successfully",
      ),
    );
});

export const getRepository = asyncHandler(async (req, res) => {
  const repositories = await getRepositories();

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,

        repositories,

        "Repositories retrieved successfully",
      ),
    );
});
