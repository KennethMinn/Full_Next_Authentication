"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  //to validate from the server cuz client side validation can always be bypassed
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) return { error: "invalid fields" };

  return { success: "email sent" };
};
