import { get, put, post, remove } from "../api/request";
import toFormData from "../utils/formData";

export function getEducations() {
  return get("/education");
}

export function getEducation(id) {
  return get(`/education/${id}`);
}

export async function createEducation(data) {
  return post("/education", toFormData(data));
}

export async function updateEducation(id, data) {
  return put(`/education/${id}`, toFormData(data));
}

export async function removeEducation(id) {
  return remove(`/education/${id}`);
}