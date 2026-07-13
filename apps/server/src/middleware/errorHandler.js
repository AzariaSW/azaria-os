import logger from "../logger/logger.js";

export default function errorHandler(err, req, res, next) {
  
  logger.error({
    requestId: req.id,

    method: req.method,

    url: req.originalUrl,

    ip: req.ip,

    statusCode: err.statusCode || err.status || 500,

    message: err.message,

    stack: err.stack,
  });

  const statusCode = err.statusCode || err.status || 500;

  const message = err.success === false ? err.message : "Internal Server Error";

  res.status(statusCode).json({
    success: false,

    message,

    errors: err.errors || [],

    requestId: req.id,
  });
}
