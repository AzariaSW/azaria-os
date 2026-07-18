import prisma from "../prisma/client.js";

import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";
import { deleteFile } from "./file.service.js";

export async function getProfile() {
  const profile = await prisma.profile.findUnique({
    where: {
      id: "main-profile",
    },
  });

  if (!profile) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, "Profile not found");
  }

  return profile;
}

export async function updateProfile(data) {
  const current = await getProfile();

  const update = await prisma.profile.update({
    where: {
      id: "main-profile",
    },

    data,
  });

  const uploadedFields = ["profileImage", "resumeUrl", "cvUrl"];

  for (const field of uploadedFields) {
    if (data[field] && current[field] && data[field] !== current[field]) {
      await deleteFile(current[field]);
    }
  }

  return update;

  return update;
}
