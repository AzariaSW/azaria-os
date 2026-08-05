import { z } from "zod";

export const updateProfileSchema = z.object({
  body: z.object({
    fullName: z.string().max(100).optional(),

    title: z.string().max(150).optional(),

    bio: z.string().max(3000).optional(),

    email: z.string().email().optional(),

    phone: z.string().max(20).optional(),
    
    telegram: z.string().min(5).max(32).optional(),

    location: z.string().max(100).optional(),

    github: z.string().url().optional(),

    linkedin: z.string().url().optional(),

  }),

  params: z.object({}),

  query: z.object({}),
});
