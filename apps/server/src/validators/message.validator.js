import { z } from "zod";
import id from "./id.validator.js";

export const messageSchema = z.object({
  body: z.object({
    name: z.string().min(2).max(100),

    email: z.string().email(),

    subject: z.string().min(10).max(100),

    message: z.string().min(5).max(1000),   

  }),

  params: z.object({}),

  query: z.object({}),
});

export const idSchema=id;