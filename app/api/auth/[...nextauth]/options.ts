import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { comparePasswords, hashPassword } from "@/lib/auth";
import { Prisma } from "@prisma/client";

const options: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  pages:{
    signIn: "/signin"
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: {
          label: "Password:",
          type: "text",
        },
      },
      async authorize(credentials) {
        // retrieve credentials here
        console.log("inside auth", credentials);
        const hashedPassword = await hashPassword(credentials!.password);

        try {
          const user = await db.user.findUniqueOrThrow({
            where: {
              email: credentials!.email,
            },
          });

          const isUser = await comparePasswords(
            credentials!.password,
            user!.password
          );
          if (isUser) {
            console.log('signin successful');
            return user;
          }
         
        } catch (e) {
          console.log(e);

          throw e;
        }
        return null;
      },
    }),
  ],
};

export default options;
