import prisma from "../prisma/client.js";

import { queryBuilder } from "./query.service.js";
import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";


export async function getAllProjects(query) {
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

  return queryBuilder({
    model: prisma.Project,

    query,

    where,

    allowedSortFields: ["title", "description","createdAt", "updatedAt"],

    defaultSort: [{ createdAt: "desc" }]
  });
}

export async function getProject(id) {
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

export async function createProject(data) {
  return prisma.project.create({
    data,
  });
}

export async function updateProject(data, projectId) {
  try {
    return prisma.project.update({
      where: {
        id: projectId,
      },
      data,
    });
  } catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, "Project not found");
    }
    throw error;
  }
}

export async function deleteProject(projectId) {
  try {
    return prisma.project.delete({
      where: {
        id: projectId,
      },
    });
  } catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, "Project not found");
    }
    throw error;
  }
}
