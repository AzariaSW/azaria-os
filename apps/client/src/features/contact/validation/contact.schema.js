import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(100, "Maximum 100 characters."),

  email: z.email("Enter a valid email address."),

  subject: z
    .string()
    .min(1, "Subject is required.")
    .max(200, "Maximum 200 characters."),

  message: z
    .string()
    .min(1, "Message is required.")
    .max(2000, "Maximum 2000 characters."),
});

export default contactSchema;
