import "dotenv/config";

import app from "./app.js";
import logger from "./logger/logger.js";

import { connectDatabase, disconnectDatabase } from "./config/database.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDatabase();

  app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
  });
}

startServer();

process.on("SIGINT", async () => {
  logger.info("Gracefully shutting down...");

  await disconnectDatabase();

  process.exit(0);
});

process.on("SIGTERM", async () => {
  await disconnectDatabase();

  process.exit(0);
});
