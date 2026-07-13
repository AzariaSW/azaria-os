import github from "../config/github.config.js";
import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": github.USER_AGENT,
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

export async function githubRequest(endpoint) {
  const response = await fetch(
    `https://api.github.com${endpoint}`,

    {
      headers,
    },
  );

  if (!response.ok) {
    throw new ApiError(
      HTTP_STATUS.SERVICE_UNAVAILABLE,
      "GitHub service temporarily unavailable.",
    );
  }

  return response.json();
}
