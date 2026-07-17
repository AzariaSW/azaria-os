import multer from "multer";
import fs from "fs";
import path from "path";
import crypto from "crypto";

import ApiError from "../utils/ApiError.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

import { UPLOAD } from "../config/upload.config.js";

export const imageUploader = (folder) =>
  createUploader({
    folder,
    allowedTypes: UPLOAD.IMAGE_TYPES,
    allowedExtensions: UPLOAD.IMAGE_EXTENSIONS,
    maxSize: UPLOAD.MAX_IMAGE_SIZE,
  });

export const pdfUploader = (folder) =>
  createUploader({
    folder,
    allowedTypes: UPLOAD.DOCUMENT_TYPES,
    allowedExtensions: UPLOAD.DOCUMENT_EXTENSIONS,
    maxSize: UPLOAD.MAX_RESUME_SIZE,
  });

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
      const extension = path.extname(file.originalname).toLowerCase();

      const filename = `${Date.now()}-${crypto.randomUUID()}${extension}`;

      cb(null, filename);
    },
  });

function fileFilter(allowedTypes, allowedExtensions) {
  return (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      return cb(
        new ApiError(HTTP_STATUS.BAD_REQUEST, "Invalid file extension."),
      );
    }

    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new ApiError(HTTP_STATUS.BAD_REQUEST, "Unsupported file type"));
    }

    cb(null, true);
  };
}

function createUploader({ folder, allowedTypes, allowedExtensions, maxSize }) {
  return multer({
    storage: storage(folder),

    fileFilter: fileFilter(allowedTypes, allowedExtensions),

    limits: {
      fileSize: maxSize,
    },
  });
}

export function handleUpload(upload) {
  return (req, res, next) => {
    upload(req, res, function (error) {
      if (!error) {
        return next();
      }

      if (error instanceof multer.MulterError) {
        switch (error.code) {
          case "LIMIT_FILE_SIZE":
            return next(
              new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "File exceeds maximum allowed size.",
              ),
            );

          case "LIMIT_UNEXPECTED_FILE":
            return next(
              new ApiError(
                HTTP_STATUS.BAD_REQUEST,
                "Unexpected uploaded file.",
              ),
            );

          default:
            return next(new ApiError(HTTP_STATUS.BAD_REQUEST, error.message));
        }
      }

      next(error);
    });
  };
}
