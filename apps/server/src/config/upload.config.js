import path from "path";

export const UPLOAD = Object.freeze({
  BASE_DIRECTORY: path.resolve("uploads"),

  DESTINATIONS: {
    PROFILE: "profile",
    PROJECTS: "projects",
    CERTIFICATES: "certificates",
    RESUME: "resume",
    CV:"cv"
  },

  MAX_FILE_SIZE: 10 * 1024 * 1024,

  IMAGE_TYPES: [
    "image/jpeg",
    "image/png",
    "image/webp",
  ],

  IMAGE_EXTENSIONS: [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp"
  ],

  DOCUMENT_TYPES: [
    "application/pdf",
  ],

  DOCUMENT_EXTENSIONS: [

    ".pdf"
  ]
});