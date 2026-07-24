import { get, put, post, remove } from "../api/request";
import toFormData from "../utils/formData";

export function getMessages() {
  return get("/messages");
}

export function getMessage(id) {
  return get(`/messages/${id}`);
}

export async function createMessage(data) {
  return post("/messages", toFormData(data));
}

export async function updateMessage(id, data) {
  return put(`/messages/${id}`, toFormData(data));
}

export async function removeProfile(id) {
  return remove(`/messages/${id}`);
}