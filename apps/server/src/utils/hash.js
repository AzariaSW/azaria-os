import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

export async function hash(value) {
  return bcrypt.hash(value, SALT_ROUNDS);
}

export async function compare(value, hash) {
  return bcrypt.compare(value, hash);
}
