import prisma from "../prisma/client.js";

export async function createContactMessage(data) {
  return prisma.contactMessage.create({
    data,
  });
}
