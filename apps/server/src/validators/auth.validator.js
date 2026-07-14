import { z } from "zod";

export const challengeSchema = z.object({
  body: z.object({
    sequence: z.string().min(20).max(40),
  }),

  params: z.object({}),

  query: z.object({}),
});

export const loginSchema = z.object({
  body: z.object({
    username: z.string().min(3).max(50),

    password: z.string().min(8),

  }),

  params: z.object({}),

  query: z.object({}),
});
