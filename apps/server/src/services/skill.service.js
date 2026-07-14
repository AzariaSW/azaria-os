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
  await getSkillById(skillId);  
  
  return prisma.skill.update({
    where: {
      id: skillId
    },
    data
  });
}



export async function deleteSkills(skillId) {
  await getSkillById(skillId);
  
  return prisma.skill.delete({
    where: {
      id: skillId
    }
  });
}
