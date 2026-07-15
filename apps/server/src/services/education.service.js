import prisma from "../prisma/client.js";

import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

export async function getAllEducations(degree) {
  const where = {};

  if (degree) {
    where.degree = degree;
  }

  return prisma.education.findMany({
    where,

    orderBy: [
      {
        degree: "asc",
      },

      {
        institution: "asc",
      },
    ],
  });
}

export async function getEducation(id) {
  const education = await prisma.education.findUnique({
    where: { id },
  });

  if (!education) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,

      "Education not found",
    );
  }

  return education;
}

export async function getEducationDegrees() {
  const result = await prisma.education.findMany({
    distinct: ["degree"],

    select: {
      degree: true,
    },

    orderBy: {
      degree: "asc",
    },
  });

  return result.map((item) => item.role);
}



export async function createEducation(data) {
  return prisma.education.create({
    data,
  });
}



export async function updateEducation(data, educationId) {
 try {
    return await prisma.education.update({
      where: {
        id: educationId
      },
      data
    });
  } catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        "Experience not found"
      );
    }
      throw error;
  }
}



export async function deleteEducation(educationId) { 
  try {
    return await prisma.education.delete({
    where: {
      id: educationId
    }
  });
} catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        "Experience not found"
      );
    }

      throw error;
}
}