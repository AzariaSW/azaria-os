import { get, post, patch, remove } from "../api/request";

export function getMessages() {
  return get("/messages");
}

export function getMessage(id) {
  return get(`/messages/${id}`);
}

export async function sendContactMessage(data) {
  return post("/messages", data);
}

export async function updateMessage(id) {
  return patch(`/messages/${id}`);
}

export async function removeProfile(id) {
  return remove(`/messages/${id}`);
}