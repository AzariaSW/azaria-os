import logger from "../logger/logger.js";
import {HTTP_STATUS} from "../constants/index.js";

export default function errorHandler(err, req, res, next) {
  
  logger.error({
    requestId: req.id,

    method: req.method,

    url: req.originalUrl,

    ip: req.ip,

    statusCode: err.statusCode || err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR,

    message: err.message,

    stack: err.stack,
  });

  const statusCode = err.statusCode || err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR;

  const message = err.success === false ? err.message : "Internal Server Error";

  res.status(statusCode).json({
    success: false,

    message,

    errors: err.errors || [],

    requestId: req.id,
  });
}
