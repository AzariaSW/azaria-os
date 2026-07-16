import { Router } from "express";

import validate from "../middleware/validate.js";
import authenticateAdmin from "../middleware/authenticateAdmin.js";
import {   
  getAllMessages,
  getMessage,
  getUnreadMessages,
  createMessage,
  updateMessage,
  deleteMessage
} from "../controllers/message.controller.js";

import { messageSchema,idSchema } from "../validators/message.validator.js";

const router = Router();

router.get("/", authenticateAdmin, getAllMessages);

router.get("/unread", authenticateAdmin, getUnreadMessages);

router.get("/:id", authenticateAdmin, validate(idSchema), getMessage);

router.post(
    "/",
    validate(messageSchema),
    createMessage
);

router.patch(
    "/:id",
    authenticateAdmin,
    validate(idSchema),
    updateMessage
);

router.delete(
    "/:id",
    authenticateAdmin,
    validate(idSchema),
    deleteMessage
);

export default router;
