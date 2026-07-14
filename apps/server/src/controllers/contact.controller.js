import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import { createContactMessage } from "../services/contact.service.js";

export const sendMessage = asyncHandler(async (req, res) => {
  const message = await createContactMessage(req.body);

  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        message,
        "Message sent successfully.",
      ),
    );
});
