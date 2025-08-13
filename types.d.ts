import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string;
  }
  interface Session {
    user?: {
      id?: string;
      name?: string;
      email?: string;
      role?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    name?: string;
    email?: string;
    role?: string;
  }
}

// Your existing interface
interface AuthCredentials {
  name: string;
  email: string;
  password: string;
  role?: string;
}
