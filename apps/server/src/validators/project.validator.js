import { z } from "zod";

export const projectSchema = z.object({
  body: z.object({
    title: z.string().min(3).max(100),

    description: z.string().min(10).max(1000),

    githubUrl: z.string().url().optional(),

    featured: z.boolean().optional(),
  }),

  params: z.object({}),

  query: z.object({}),
});
