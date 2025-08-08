"use server";
import { signIn, signOut } from "./auth";

export async function signInAction(
  params: Pick<AuthCredentials, "email" | "password" | "role">
) {
  const { email, password, role } = params;
  try {
    const result = await signIn("credentials", {
      email,
      password,
      role,
      redirect: false,
    });
    console.log(result);
    if (result?.error) {
      return { success: false, error: result.error };
    }
    return {
      success: true,
      id: result?.id,
      email: result?.email,
      role: result?.role,
    };
  } catch (error) {
    return { success: false, error };
  }
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
