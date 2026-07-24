import { get, put, post, remove } from "../api/request";
import toFormData from "../utils/formData";

export function getSkills() {
  return get("/skills");
}

export function getSkill(id) {
  return get(`/skills/${id}`);
}

export function getSkillCategories() {
  return get("skills/categories");
}

export async function createSKill(data) {
  return post("/skills", toFormData(data));
}

export async function updateSKill(id, data) {
  return put(`/skills/${id}`, toFormData(data));
}

export async function removeSKill(id) {
  return remove(`/skills/${id}`);
}