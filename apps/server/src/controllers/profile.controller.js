import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getProfile as getProfileService,
  updateProfile as updateProfileService,
} from "../services/profile.service.js";

export const getProfile = asyncHandler(async (req, res) => {
  const profile = await getProfileService();

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      profile,

      "Profile retrieved successfully",
    ),
  );
});

export const updateProfile = asyncHandler(async (req, res) => {
  try {
  const data = { ...req.validated.body };
  if (req.file) {
    if (!req.file.size) {
      return new ApiError(HTTP_STATUS.BAD_REQUEST, "Uploaded file is empty.");
    }
    data.profileImage = `/uploads/profile/${req.file.filename}`;
  }
    const profile = await updateProfileService(data);
    res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      profile,

      "Profile updated.",
    ),
  );
  } catch (error) {
    if (req.file) {
      await deleteFile(req.file.path);
    }

    throw error;
  }
});
