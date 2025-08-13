// lib/auth/verifyUserCredentials.ts
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { compare } from "bcryptjs";

export async function verifyUserCredentials(email: string, password: string) {
  if (!email || !password) {
    return { error: "Empty credential fields" };
  }

  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (user.length === 0) {
    return { error: "No user found" };
  }

  const isPasswordValid = await compare(password, user[0].password);
  if (!isPasswordValid) {
    return { error: "Invalid password" };
  }

  return {
    id: user[0].id.toString(),
    email: user[0].email,
    role: user[0].role,
  };
}
