import { z } from "zod";
import id from "./id.validator.js";

export const skillSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100),

    category: z.string().min(5).max(50),

    level: z.string().min(3).max(30),

    icon: z.string().min(2).max(100).optional(),
  }),

  params: z.object({}),

  query: z.object({}),
});

export const updateSkillSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100).optional(),

    category: z.string().min(5).max(50).optional(),

    level: z.string().min(3).max(30).optional(),

    icon: z.string().min(2).max(100).optional(),
  }),
  params: id.shape.params,

  query: z.object({}),
});

export const idSchema = id;
