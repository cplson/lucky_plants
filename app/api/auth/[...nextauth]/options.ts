import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { comparePasswords, hashPassword } from "@/lib/auth";
import { v4 } from "uuid";

const options: NextAuthOptions = {
  // adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
        console.log('triggered jwt callback', user, 'token:', token)
        
        const thisUser = await db.user.findFirst({
          where:{
            email: token.email!
          }
        })

        // if Oauth user is not in the db
        // create user and cart for this user
        // then return the db user id
        if(!thisUser && user.email){
          
          const dbUser = await db.user.create({
            data:{
              email: user.email
            },
            select: {
              id: true,
              email: true,
            }
          })
          token.id = dbUser.id
          await db.cart.create({
            data:{
              shopperId: dbUser.id
            }
          })

        }
        
        return { email: thisUser!.email, id: thisUser!.id, ...token };
    },
    async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        // console.log('token in session:', token);
        session.user = token;
        // console.log('session in session:', session)
        return session;
    },
   
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
            return { id: user.id, email: user.email};
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
