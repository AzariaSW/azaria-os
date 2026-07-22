import { z } from "zod";
import id from "./id.validator.js";
import toDate from "../utils/dateConverter.js";

export const educationSchema = z.object({
  body: z.object({
    institution: z.string().max(100),

    degree: z.string().max(50),

    field: z.string().max(100),

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

export const updateEducationSchema = z.object({
  body: z.object({
    institution: z.string().max(100).optional(),

    degree: z.string().max(50).optional(),

    field: z.string().max(100).optional(),

    startDate: z.preprocess(
      (value) => toDate(value),
      z.date()
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