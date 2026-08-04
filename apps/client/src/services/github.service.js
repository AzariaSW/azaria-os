import { get } from "../api/request";

export function getGithubProfile() {
  return get("/github/profile");
}

export function getGithubRepositories() {
  return get("/github/repositories");
}

export function getGithubActivity() {
  return get("/github/activity");
}