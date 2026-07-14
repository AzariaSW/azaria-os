import { z } from "zod";

export const challengeSchema = z.object({
  body: z.object({
    sequence: z.string().min(20).max(40),
  }),

  params: z.object({}),

  query: z.object({}),
});
