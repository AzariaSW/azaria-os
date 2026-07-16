import { z } from "zod";
import id from "./id.validator.js";
import toDate from "../utils/dateConverter.js";

export const certificateSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100),

    issuer: z.string().min(5).max(100),

    issueDate: z.preprocess(
      (value) => value ? toDate(value) : undefined,
      z.date()
    ),

    credentialUrl: z.string().url().optional(),

  }),

  params: z.object({}),

  query: z.object({}),
});

export const updateCertificateSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100).optional(),

    issuer: z.string().min(5).max(100).optional(),

    issueDate: z.preprocess(
      (value) => value ? toDate(value) : undefined,
      z.date().optional()
    ),

    credentialUrl: z.string().url().optional(),

  }),

  params: id.shape.params,

  query: z.object({}),
});

export const idSchema=id;