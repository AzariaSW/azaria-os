import prisma from "../prisma/client.js";

export async function checkDatabase() {
  await prisma.$queryRaw`SELECT 1`;

  return {
    database: "connected",
  };
}
