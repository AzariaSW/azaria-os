import { z } from "zod";
import id from "./id.validator.js";
import toDate from "../utils/dateConverter.js";

export const experienceSchema = z.object({
  body: z.object({
    company: z.string().min(2).max(100),

    role: z.string().min(5).max(50),

    description: z.string().min(10).max(1000),

    startDate: z.preprocess(
      (value) => toDate(value),
      z.date()
    ),

    endDate: z.preprocess(
      (value) => value ? toDate(value) : undefined,
      z.date().optional()
    ),

  }),

  params: z.object({}),

  query: z.object({}),
});

export const updateExperienceSchema = z.object({
  body: z.object({
    company: z.string().min(2).max(100).optional(),

    role: z.string().min(5).max(50).optional(),

    description: z.string().min(10).max(1000).optional(),

    startDate: z.preprocess(
      (value) => value ? toDate(value) : undefined,
      z.date().optional()
    ),

    endDate: z.preprocess(
      (value) => value ? toDate(value) : undefined,
      z.date().optional()
    ),

  }),

  params: id.shape.params,

  query: z.object({}),
});

export const idSchema=id;