import path from "path";

export const UPLOAD = Object.freeze({
  BASE_DIRECTORY: path.resolve("uploads"),

  DESTINATIONS: {
    PROFILE: "profile",
    PROJECTS: "projects",
    CERTIFICATES: "certificates",
    RESUME: "resume",
  },

  MAX_IMAGE_SIZE: 5 * 1024 * 1024,

  MAX_RESUME_SIZE: 10 * 1024 * 1024,

  IMAGE_TYPES: [
    "image/jpeg",
    "image/png",
    "image/webp",
  ],

  DOCUMENT_TYPES: [
    "application/pdf",
  ],
});