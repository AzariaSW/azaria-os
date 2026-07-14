import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import { getProfile,updateProfiles } from "../services/profile.service.js";

export const getMyProfile = asyncHandler(async (req, res) => {
  const profile = await getProfile();

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      profile,

      "Profile retrieved successfully",
    ),
  );
});

export const updateProfile = asyncHandler(async (req, res) => {
  const profile = await updateProfiles(req.body);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      profile,

      "Profile updated.",
    ),
  );
});
