import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { comparePasswords, hashPassword } from "@/lib/auth";

const options: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
        
        
        const thisUser = await db.user.findUnique({
          where:{
            id: token.sub
          }
        })
        // console.log('thisUser in token:', thisUser)
        // console.log('token in token:', token)
        token.name = thisUser?.firstName
        return { ...token, id: thisUser!.id };
    },
    async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        // console.log('token in session:', token);
        session.user = token;
        // console.log('session in session:', session)
        return session;
    },
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
        // console.log("inside auth", credentials);
        const hashedPassword = await hashPassword(credentials!.password);

        try {
          const user = await db.user.findUniqueOrThrow({
            where: {
              email: credentials!.email,
            },
            select:{
              firstName: true,
              password: true,
              email: true,
              id: true
            }
          });
          // console.log('user', user);
          const isUser = await comparePasswords(
            credentials!.password,
            user!.password
          );
          
          if (isUser) {
            return { id: user.id};
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
