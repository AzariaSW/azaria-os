import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getAllMessages  as getAllMessagesService,
  getMessage as getMessageService,
  getUnreadMessages as getUnreadMessagesService,
  createMessage as createMessageService,
  updateMessage as updateMessageService,
  deleteMessage as deleteMessageService
} from "../services/message.service.js";

export const getAllMessages = asyncHandler(async (req, res) => {
  const result = await getAllMessagesService(req.query);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      result.messages,

      "Messages retrieved successfully",

      result.pagination,
    ),
  );
});

export const getMessage = asyncHandler(async (req, res) => {
  const message = await getMessageService(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      message,

      "Message retrieved successfully",
    ),
  );
});

export const getUnreadMessages = asyncHandler(async (req, res) => {
  const messages = await getUnreadMessagesService();

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      messages,

      "Unread messages retrieved successfully",
    ),
  );
});

export const createMessage = asyncHandler(async (req, res) => {
  const message = await createMessageService(req.body);

  res.status(HTTP_STATUS.CREATED).json(
    new ApiResponse(
      HTTP_STATUS.CREATED,

      message,

      "Message created successfully",
    ),
  );
});

export const updateMessage = asyncHandler(async (req, res) => {
  const message = await updateMessageService(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      message,

      "Message marked as read successfully",
    ),
  );
});

export const deleteMessage = asyncHandler(async (req, res) => {
  const message = await deleteMessageService(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      message,

      "Message deleted successfully",
    ),
  );
});