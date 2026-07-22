import { z } from "zod";
import id from "./id.validator.js";

export const messageSchema = z.object({
  body: z.object({
    name: z.string().max(100),

    email: z.string().email(),

    subject: z.string().max(200),

    message: z.string().max(2000),   

  }),

  params: z.object({}),

  query: z.object({}),
});

export const idSchema=id;