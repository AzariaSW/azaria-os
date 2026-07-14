import env from "./env.js";

export default Object.freeze({
  username: process.env.ADMIN_USERNAME,

  passwordHash: process.env.ADMIN_PASSWORD_HASH,

  sequenceHash: process.env.ADMIN_SEQUENCE_HASH,

  jwtSecret: process.env.JWT_SECRET,

  jwtExpiresIn: process.env.JWT_EXPIRES_IN,

  challengeExpiresIn: process.env.JWT_CHALLENGE_EXPIRES_IN,
});
