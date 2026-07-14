import { z } from "zod";

export const projectSchema = z.object({
  body: z.object({
    title: z.string().min(3).max(100),

    description: z.string().min(10).max(1000),

    githubUrl: z.string().url().optional(),

    liveUrl: z.string().url().optional(),

    imageUrl: z.string().url().optional(),

    featured: z.boolean().optional(),
  }),

  params: z.object({}),

  query: z.object({}),
});

export const updateProjectSchema = z.object({
  body: z.object({
    title: z.string().min(3).max(100).optional(),

    description: z.string().min(10).max(1000).optional(),

    githubUrl: z.string().url().optional(),

    liveUrl: z.string().url().optional(),

    imageUrl: z.string().url().optional(),

    featured: z.boolean().optional(),
  }),

  params: z.object({
    id: z.string().uuid(),
  }),

  query: z.object({}),
});

export const projectIdSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});
