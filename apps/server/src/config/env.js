import dotenv from "dotenv";

dotenv.config();

const requiredVariables = ["DATABASE_URL", "CLIENT_URL"];

for (const variable of requiredVariables) {
  if (!process.env[variable]) {
    throw new Error(`Missing required environment variable: ${variable}`);
  }
}

const env = {
  PORT: Number(process.env.PORT) || 5000,

  NODE_ENV: process.env.NODE_ENV || "development",

  CLIENT_URL: process.env.CLIENT_URL,

  DATABASE_URL: process.env.DATABASE_URL,
};

export default Object.freeze(env);
