import prisma from "../prisma/client.js";

import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";
import { getPagination, getPaginationMeta } from "../utils/pagination.js";
import { getSorting } from "../utils/sorting.js";

export async function getAllExperiences(query) {
  const where = {};
  const { page, limit, skip } = getPagination(query.page, query.limit);
  const orderBy = getSorting(
    query.sort,
    query.order,
    ["company", "role", "createdAt", "startDate"],
    [{ role: "asc" }, { company: "asc" }],
  );

  if (query.role) {
    where.role = query.role;
  }

  if (query.search) {
    where.OR = [
      {
        company: {
          contains: query.search,

          mode: "insensitive",
        },
      },

      {
        description: {
          contains: query.search,

          mode: "insensitive",
        },
      },
    ];
  }

  const [total, experiences] = await prisma.$transaction([
    prisma.experience.count({
      where,
    }),

    prisma.experience.findMany({
      where,

      skip,

      take: limit,

      orderBy: orderBy,
    }),
  ]);

  return {
    items: experiences,

    pagination: getPaginationMeta(page, limit, total),
  };
}

export async function getExperience(id) {
  const experience = await prisma.experience.findUnique({
    where: { id },
  });

  if (!experience) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,

      "Experience not found",
    );
  }

  return experience;
}

export async function getExperienceRoles() {
  const result = await prisma.experience.findMany({
    distinct: ["role"],

    select: {
      role: true,
    },

    orderBy: {
      role: "asc",
    },
  });

  return result.map((item) => item.role);
}

export async function createExperience(data) {
  return prisma.experience.create({
    data,
  });
}

export async function updateExperience(data, experienceId) {
  try {
    return await prisma.experience.update({
      where: {
        id: experienceId,
      },
      data,
    });
  } catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, "Experience not found");
    }
    throw error;
  }
}

export async function deleteExperience(experienceId) {
  try {
    return await prisma.experience.delete({
      where: {
        id: experienceId,
      },
    });
  } catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, "Experience not found");
    }

    throw error;
  }
}
