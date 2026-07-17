import prisma from "../prisma/client.js";

import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";
import { queryBuilder } from "./query.service.js";

export async function getAllEducations(query) {
  const where = {};

  if (query.search) {
    where.OR = [
      {
        institution: {
          contains: query.search,

          mode: "insensitive",
        },
      },

      {
        field: {
          contains: query.search,

          mode: "insensitive",
        },
      },

      {
        degree: {
          contains: query.search,

          mode: "insensitive",
        },
      },
    ];
  }

  return queryBuilder({
    model: prisma.Education,

    query,

    where,

    allowedSortFields: ["institution", "degree", "field","endDate","createdAt", "startDate"],

    defaultSort: [{ institution: "asc" }, { degree: "desc" }],
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

  return result.map((item) => item.degree);
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
        "Education not found"
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
        "Education not found"
      );
    }

      throw error;
}
}