import prisma from "../prisma/client.js";

import { getPagination } from "../utils/pagination.js";
import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

export async function getProjects(query = {}) {
  const { page, limit, skip } = getPagination(query.page, query.limit);

  const where = {};

  if (query.featured === "true") {
    where.featured = true;
  }

  if (query.search) {
    where.OR = [
      {
        title: {
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

  const [projects, total] = await prisma.$transaction([
    prisma.project.findMany({
      where,

      skip,

      take: limit,

      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.project.count({
      where,
    }),
  ]);

  return {
    projects,

    pagination: {
      page,

      limit,

      total,

      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function getProjectById(id) {
  const project = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  if (!project) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,

      "Project not found",
    );
  }

  return project;
}

export async function getFeaturedProjects() {
  return prisma.project.findMany({
    where: {
      featured: true,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 6,
  });
}

export async function createProjects(data) {
  return prisma.project.create({
    data,
  });
}

export async function updateProjects(data, projectId) {
  await getProjectById(projectId);
  return prisma.project.update({
    where: {
      id: projectId
    },
    data
  });
}

export async function deleteProjects(projectId) {
  await getProjectById(projectId);
  return prisma.project.delete({
    where: {
      id: projectId
    }
  });
}