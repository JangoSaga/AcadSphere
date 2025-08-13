import LoginForm from "@/app/_components/auth/LoginForm";
import { auth } from "@/app/_lib/auth";
import Link from "next/link";
export const metadata = {
  title: "Login",
};
export default async function LoginPage() {
  const session = await auth();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        {session?.user?.id ? (
          <div className="text-center text-lg font-semibold text-green-600">
            You are already authenticated.
          </div>
        ) : (
          <LoginForm />
        )}
      </div>
    </main>
  );
}
