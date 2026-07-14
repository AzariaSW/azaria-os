import authConfig from "../config/auth.config.js";

import { compare } from "../utils/hash.js";

import { sign } from "../utils/jwt.js";

import ApiError from "../utils/ApiError.js";

import { HTTP_STATUS } from "../constants/httpStatus.js";

export async function verifySequence(sequence) {
  const valid = await compare(
    sequence,

    authConfig.sequenceHash,
  );

  if (!valid) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,

      "Invalid challenge.",
    );
  }

  return sign(
    {
      type: "challenge",

      authorized: true,
    },

    authConfig.challengeExpiresIn,
  );
}

export async function verifyCredentials() {
  throw new Error("Not implemented.");
}
