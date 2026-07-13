import prisma from "../prisma/client.js";

export async function connectDatabase() {
  try {
    await prisma.$connect();

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);

    process.exit(1);
  }
}

export async function disconnectDatabase() {
  await prisma.$disconnect();

  console.log("Database connection closed");
}
