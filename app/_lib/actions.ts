"use server";
import { signIn, signOut } from "./auth";
import { verifyUserCredentials } from "./verifyUserCredentials";

export async function signInAction(params: {
  email: string;
  password: string;
}) {
  const { email, password } = params;
  try {
    const user = await verifyUserCredentials(email, password);
    if ("error" in user) {
      return { success: false, error: user.error };
    }
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return { success: true, user };
  } catch (error) {
    return { success: false, error };
  }
}
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
