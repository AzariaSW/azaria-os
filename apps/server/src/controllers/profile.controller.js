import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { deleteFile } from "../services/file.service.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";
import {
  getProfile as getProfileService,
  updateProfile as updateProfileService,
} from "../services/profile.service.js";
import {validateUploadedFile} from "../services/file.service.js";

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

function getUploadedFile(req, field) {
  return req.files?.[field]?.[0] ?? null;
}

export const updateProfile = asyncHandler(async (req, res) => {
  const data = { ...req.validated.body };
  const profileImage = getUploadedFile(req, "profileImage");
  const resume = getUploadedFile(req, "resume");
  const cv = getUploadedFile(req, "cv");

  try {
    if (profileImage) {
      await validateUploadedFile(profileImage, UPLOAD.IMAGE_TYPES);
      data.profileImage = `/uploads/profile/${profileImage.filename}`;
    }

    if (resume) {
      await validateUploadedFile(resume, UPLOAD.DOCUMENT_TYPES);
      data.resumeUrl = `/uploads/resume/${resume.filename}`;
    }

    if (cv) {
      await validateUploadedFile(cv, UPLOAD.DOCUMENT_TYPES);
      data.cvUrl = `/uploads/cv/${cv.filename}`;
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
    if (req.files) {
      await deleteFile(profileImage?.path);
      await deleteFile(resume?.path);
      await deleteFile(cv?.path);
    }

    throw error;
  }
});
