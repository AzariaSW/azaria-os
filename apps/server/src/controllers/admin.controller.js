import asyncHandler from "../utils/asyncHandler.js";

import ApiResponse from "../utils/ApiResponse.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import { verifySequence } from "../services/auth.service.js";

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
