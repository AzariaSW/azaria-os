import { get, put, post, remove } from "../api/request";
import toFormData from "../utils/formData";

export function getExperiences() {
  return get("/experiences");
}

export function getExperience(id) {
  return get(`/experiences/${id}`);
}

export function getExperienceRoles() {
  return get("experiences/roles");
}

export async function createExperience(data) {
  return post("/experiences", toFormData(data));
}

export async function updateExperience(id, data) {
  return put(`/experiences/${id}`, toFormData(data));
}

export async function removeExperience(id) {
  return remove(`/experiences/${id}`);
}