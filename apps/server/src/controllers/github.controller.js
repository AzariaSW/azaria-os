import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getGithubProfile as getGithubProfileService,
  getRepositories as getRepositoriesService,
  getRecentActivity as getRecentActivityService,
} from "../services/github.service.js";

export const getRecentActivity = asyncHandler(async (req, res) => {
  const activity = await getRecentActivityService();

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

export const getGithubProfile = asyncHandler(async (req, res) => {
  const profile = await getGithubProfileService();

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

export const getRepositories = asyncHandler(async (req, res) => {
  const repositories = await getRepositoriesService();

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
