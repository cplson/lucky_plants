"use client";
import { signIn } from "next-auth/react";

const githubSignin = () => {
  console.log("triggered githubSignin");
  signIn("github", { callbackUrl: "https://lucky-plants-cplson.vercel.app" });
};

export default function GithubAuthBtn() {
  return (
    // <form className="flex justify-center w-full mt-8">
    <button
      onClick={githubSignin}
      type="submit"
      className="px-5 md:px-6 py-4 mb-2 my-8 border-2 border-gray-300 rounded-lg max-w-1/2 sm:max-w-full"
    >
      <div className="flex items-center">
        <img
          className=""
          loading="lazy"
          height="24"
          width="24"
          id="provider-logo"
          src="https://authjs.dev/img/providers/github.svg"
        />
        <img
          loading="lazy"
          height="24"
          width="24"
          id="provider-logo-dark"
          src="https://authjs.dev/img/providers/github-dark.svg"
        />
        <span className="">GitHub Signin</span>
      </div>
    </button>
    // </form>
  );
}

// csrf token c67b56ed88ddc61609eb112f5fa48d82defdf7636d18de04613d9c3f26249ca4
