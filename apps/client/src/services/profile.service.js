import { get, put } from "../api/request";
import toFormData from "../utils/formData";

export function getProfile() {
  return get("/profile");
}

export async function updateProfile(data) {
  return put("/profile", toFormData(data));
}
