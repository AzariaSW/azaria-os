import { z } from "zod";

export const updateProfileSchema = z.object({
  body: z.object({
    fullName: z.string().min(3).max(100).optional(),

    title: z.string().max(150).optional(),

    bio: z.string().max(3000).optional(),

    email: z.string().email().optional(),

    location: z.string().max(100).optional(),

    github: z.string().url().optional(),

    resumeUrl: z.string().url().optional(),

    cvUrl: z.string().url().optional(),

    linkedin: z.string().url().optional(),

    profileImage: z.string().optional(),
  }),

  params: z.object({}),

  query: z.object({}),
});
