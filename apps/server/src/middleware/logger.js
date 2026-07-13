import morgan from "morgan";
import logger from "../logger/logger.js";

const stream = {
  write(message) {
    logger.info(message.trim());
  },
};

const httpLogger = morgan(
  (tokens, req, res) => {
    return [
      `[${req.id ?? "-"}]`,

      tokens.method(req, res),

      tokens.url(req, res),

      tokens.status(req, res),

      `${tokens["response-time"](req, res)} ms`,
    ].join(" ");
  },
  {
    stream,
  },
);

export default httpLogger;
