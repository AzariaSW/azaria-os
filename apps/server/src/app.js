import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

import { securityMiddleware, limiter } from "./middleware/security.js";

import requestId from "./middleware/requestId.js";

import httpLogger from "./middleware/logger.js";

import apiRoutes from "./routes/index.js";

import notFound from "./middleware/notFound.js";

import errorHandler from "./middleware/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.set("trust proxy", 1);

app.disable("x-powered-by");

securityMiddleware.forEach((middleware) => app.use(middleware));

app.use(compression());

app.use(limiter);

app.use(requestId);

app.use(httpLogger);

app.use(
  express.json({
    limit: "100kb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "100kb",
  }),
);

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "../uploads"),
  ),
);

app.use("/api", apiRoutes);

app.use(notFound);

app.use(errorHandler);

export default app;
