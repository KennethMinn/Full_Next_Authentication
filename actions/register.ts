"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import db from "@/lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  //to validate from the server cuz client side validation can always be bypassed
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) return { error: "invalid fields" };

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) return { error: "Email already in use!" };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send verification email

  return { success: "User created!" };
};
