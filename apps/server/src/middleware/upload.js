import multer from "multer";
import fs from "fs";
import path from "path";
import crypto from "crypto";

import ApiError from "../utils/ApiError.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import { UPLOAD } from "../config/upload.config.js";

const storage = (folder) =>
  multer.diskStorage({
    destination(req, file, cb) {
      const destination = path.join(UPLOAD.BASE_DIRECTORY, folder);

      fs.mkdirSync(destination, {
        recursive: true,
      });

      cb(null, destination);
    },

    filename(req, file, cb) {
      const extension = path.extname(file.originalname);

      const filename = `${Date.now()}-${crypto.randomUUID()}${extension}`;

      cb(null, filename);
    },
  });

function fileFilter(allowedTypes) {
  return (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
      return cb(null, true);
    }

    cb(new ApiError(HTTP_STATUS.BAD_REQUEST, "Unsupported file type"));
  };
}

export function createUploader({
  folder,

  allowedTypes,

  maxSize,
}) {
  return multer({
    storage: storage(folder),

    fileFilter: fileFilter(allowedTypes),

    limits: {
      fileSize: maxSize,
    },
  });
}
