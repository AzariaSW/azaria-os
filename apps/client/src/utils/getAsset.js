import env from "../config/env";
export function getAsset(path) {
  if (!path) {
    return null;
  }

  return `${env.UPLOAD_URL}${path}`;
}