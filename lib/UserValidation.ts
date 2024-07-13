import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50, "Name must be at most %0 characters"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "invalid Phone Number"),
});
