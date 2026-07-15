import asyncHandler from "../utils/asyncHandler.js";

import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

import { verifySequence, verifyCredentials } from "../services/auth.service.js";

export const challenge = asyncHandler(async (req, res) => {
  const token = await verifySequence(req.body.sequence);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      {
        challengeToken: token,
      },

      "Challenge completed.",
    ),
  );
});

export const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const challengeToken = req.get("X-Admin-Challenge");

  if (!challengeToken) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,

      "Challenge token is required.",
    );
  }
  const token = await verifyCredentials(username, password, challengeToken);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      {
        token,
      },

      "Login successful.",
    ),
  );
});
