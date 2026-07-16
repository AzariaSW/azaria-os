import prisma from "../prisma/client.js";

import { getPagination } from "../utils/pagination.js";
import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

export async function getAllMessages(query = {}) {
  const { page, limit, skip } = getPagination(query.page, query.limit);

  const where = {};

  if (query.isRead === "false") {
    where.isRead = false;
  }

  if (query.search) {
    where.OR = [
      {
        name: {
          contains: query.search,

          mode: "insensitive",
        },
      },

      {
        subject: {
          contains: query.search,

          mode: "insensitive",
        },
      },

      {
        message: {
          contains: query.search,

          mode: "insensitive",
        },
      },

      {
        email: {
          contains: query.search,

          mode: "insensitive",
        },
      }
    ];
  }

  const [messages, total] = await prisma.$transaction([
    prisma.ContactMessage.findMany({
      where,

      skip,

      take: limit,

      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.ContactMessage.count({
      where,
    }),
  ]);

  return {
    messages,

    pagination: {
      page,

      limit,

      total,

      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function getMessage(id) {
  const message = await prisma.ContactMessage.findUnique({
    where: {
      id,
    },
  });

  if (!message) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,

      "Message not found",
    );
  }

  return message;
}

export async function getUnreadMessages() {
  return prisma.ContactMessage.findMany({
    where: {
      isRead: false,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 6,
  });
}

export async function createMessage(data) {
  return prisma.ContactMessage.create({
    data,
  });
}

export async function updateMessage(messageId) {
  try {
    return prisma.ContactMessage.update({
      where: {
        id: messageId,
      },
      data: {
        isRead: true,
      }
    });
  } catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, "Message not found");
    }
    throw error;
  }
}

export async function deleteMessage(messageId) {
  try {
    return prisma.ContactMessage.delete({
      where: {
        id: messageId,
      },
    });
  } catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, "Message not found");
    }
    throw error;
  }
}
