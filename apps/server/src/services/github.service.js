import cacheService from "./cache.service.js";
import { githubRequest } from "../lib/github.js";
import GITHUB from "../config/github.config.js";

const USERNAME = process.env.GITHUB_USERNAME;

export async function getGithubProfile() {
  const cacheKey = GITHUB.CACHE.KEYS.PROFILE;

  const cached = cacheService.get(cacheKey);

  if (cached) {
    return cached;
  }

  const profile = await githubRequest(`/users/${USERNAME}`);

  cacheService.set(
    cacheKey,

    profile,

    GITHUB.CACHE.TTL,
  );

  return profile;
}

export async function getRepositories() {
  const cacheKey = GITHUB.CACHE.KEYS.REPOSITORIES;

  const cached = cacheService.get(cacheKey);

  if (cached) {
    return cached;
  }

  const repositories = await githubRequest(
    `/users/${USERNAME}/repos?sort=updated&per_page=100`,
  );

  cacheService.set(
    cacheKey,

    repositories,

    GITHUB.CACHE.TTL,
  );

  return repositories;
}

export async function getRecentActivity() {
  const cacheKey = GITHUB.CACHE.KEYS.EVENTS;

  const cached = cacheService.get(cacheKey);

  if (cached) {
    return cached;
  }

  const events = await githubRequest(
    `/users/${USERNAME}/events/public?per_page=100`,
  );

  cacheService.set(
    cacheKey,

    events,

    GITHUB.CACHE.TTL,
  );

  return events;
}
