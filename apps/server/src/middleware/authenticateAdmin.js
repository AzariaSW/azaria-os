import ApiError from "../utils/ApiError.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import { verify } from "../utils/jwt.js";

export default function authenticateAdmin(req, res, next) {
  const authorization = req.get("Authorization");

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(
      new ApiError(
        HTTP_STATUS.UNAUTHORIZED,

        "Authentication required.",
      ),
    );
  }

  const token = authorization.replace("Bearer ", "");

  const payload = verify(token);

  if (payload.role !== "admin" ||  payload.type !== "access") {
    return next(
      new ApiError(
        HTTP_STATUS.UNAUTHORIZED,

        "Invalid token.",
      ),
    );
  }

  req.admin = payload;

  next();
}
