import { authConfig } from "@/auth.config";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyUserCredentials } from "./verifyUserCredentials";
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(
        credentials: { email?: string; password?: string } | undefined
      ) {
        const result = await verifyUserCredentials(
          credentials?.email!,
          credentials?.password!
        );

        if ("error" in result) {
          return null;
        }

        return result;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
