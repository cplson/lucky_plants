"use client";

import Button from "@/components/Button";
import Card from "./Card";
import Input from "./Input";
import { useRouter } from "next/navigation";
import { register } from '@/lib/api';
import { useCallback, useState } from "react";
import Link from "next/link";
import {signIn} from "next-auth/react"


// Content for register page
const registerContent = {
  linkUrl: "/signin",
  linkText: "Already have an account?",
  header: "Create a new Account",
  subheader: "Just a few things to get started",
  buttonText: "Register",
};

// Content for signing page
const signinContent = {
  linkUrl: "/register",
  linkText: "Don't have an account?",
  header: "Welcome Back",
  subheader: "Enter your credentials to access your account",
  buttonText: "Sign In",
};

// initial state for the form
const initial = { email: "", password: "", firstName: "", lastName: "" };

// The AuthForm expects a mode thats either register or signin
// this mode determines the content that will be displayed
export default function AuthForm({ mode }: { mode: "register" | "signin" }) {
  const [formState, setFormState] = useState({ ...initial });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        if (mode === "register") {
          await register(formState);
        } else {
          const user = await signIn('credentials', {email: formState.email, password: formState.password, callbackUrl: 'http://localhost:3000/shop'});
        }
        
      } catch (e) {
        setError(`Could not ${mode}`);
      } finally {
        setFormState({ ...initial });
      }
    },
    [
      formState.email,
      formState.password,
      formState.firstName,
      formState.lastName,
    ]
  );
  
  const content = mode === 'register' ? registerContent : signinContent;

  return(
    <Card className='max-w-2xl mt-0 mx-auto'>
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-2xl mb-2">{content.header}</h2>
          <p className="tex-lg text-black/40">{content.subheader}</p>
        </div>
        <form onSubmit={handleSubmit} className="pb-10 pt-6 w-full">
          {mode === "register" && (
            <div className="flex flex-col md:flex-row mb-8 justify-between">
              <div className="pr-2">
                <div className="text-lg mb-1 ml-2 text-black/50">
                  First Name
                </div>
                <Input
                  required
                  placeholder="First Name"
                  value={formState.firstName}
                  className=" mb-4 border-solid border-gray border-2 px-6 py-2 text-lg rounded-xl w-full"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormState((s) => ({ ...s, firstName: e.target.value }))
                  }
                />
              </div>
              <div className="">
                <div className="text-lg mb-1 ml-2 text-black/50">Last Name</div>
                <Input
                  required
                  placeholder="Last Name"
                  value={formState.lastName}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-xl w-full"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormState((s) => ({ ...s, lastName: e.target.value }))
                  }
                />
              </div>
            </div>
          )}
          <div className="mb-4">
            <div className="text-lg mb-1 ml-2 text-black/50">Email</div>
            <Input
              required
              type="email"
              placeholder="Email"
              value={formState.email}
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-xl w-full"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormState((s) => ({ ...s, email: e.target.value }))
              }
            />
          </div>
          <div className="mb-8">
            <div className="text-lg mb-1 ml-2 text-black/50">Password</div>
            <Input
              required
              value={formState.password}
              type="password"
              placeholder="Password"
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-xl w-full"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormState((s) => ({ ...s, password: e.target.value }))
              }
            />
          </div>
          <hr className="w-1/2 mx-auto"/>
          <div className="flex items-center justify-between mt-8">
            <div>
              <span>
                <Link
                  href={content.linkUrl}
                  className="text-blue-600 font-bold"
                >
                  {content.linkText}
                </Link>
              </span>
            </div>
            <div>
              <button className="text-xl font-medium px-4 py-2 rounded-3xl text-blue-700 border-2 border-blue-700 hover:border-blue-500 focus:border-blue-500 hover:text-blue-500 focus:text-blue-500">
                {content.buttonText}
              </button>
              {/* <button onClick={() => signIn()}>Sign in</button> */}
            </div>
          </div>
        </form>
      </div>
    </Card>
  )
}
