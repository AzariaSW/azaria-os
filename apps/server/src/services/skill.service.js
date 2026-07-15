import prisma from "../prisma/client.js";

import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

export async function getSkills(category) {
  const where = {};

  if (category) {
    where.category = category;
  }

  return prisma.skill.findMany({
    where,

    orderBy: [
      {
        category: "asc",
      },

      {
        name: "asc",
      },
    ],
  });
}

export async function getSkillById(id) {
  const skill = await prisma.skill.findUnique({
    where: { id },
  });

  if (!skill) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,

      "Skill not found",
    );
  }

  return skill;
}

export async function getCategories() {
  const result = await prisma.skill.findMany({
    distinct: ["category"],

    select: {
      category: true,
    },

    orderBy: {
      category: "asc",
    },
  });

  return result.map((item) => item.category);
}



export async function createSkills(data) {
  return prisma.skill.create({
    data,
  });
}



export async function updateSkills(data, skillId) {
 try {
    return await prisma.skill.update({
      where: {
        id: skillId
      },
      data
    });
  } catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        "Skill not found"
      );
    }
      throw error;
  }
}



export async function deleteSkills(skillId) {
  
  try {
    return await prisma.skill.delete({
    where: {
      id: skillId
    }
  });
} catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        "Skill not found"
      );
    }

      throw error;
}
