import prisma from "../prisma/client.js";

import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

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
