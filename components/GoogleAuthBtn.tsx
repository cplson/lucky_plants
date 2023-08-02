"use client";
import { signIn } from "next-auth/react";

const googleSignin = () => {
  console.log("triggered googleSignin");
  signIn("google", { callbackUrl: "http://localhost:3000" });
};

export default function GoogleAuthBtn() {
  return (
    // <form action={`http://localhost:3000/api/auth/signin/google`} method="POST" className="w-full flex justify-center mt-4">
    <>
      {/* <input
        type="hidden"
        name="csrfToken"
        value="c67b56ed88ddc61609eb112f5fa48d82defdf7636d18de04613d9c3f26249ca4"
      />
      <input type="hidden" name="callbackUrl" value={`http://localhost:3000`} /> */}
      <button
        onClick={googleSignin}
        type="submit"
        className="flex px-6 py-4 border-2 border-gray-300 rounded-lg"
      >
        <img
          className="mr-6"
          loading="lazy"
          height="24"
          width="24"
          id="provider-logo"
          src="https://authjs.dev/img/providers/google.svg"
        />
        {/* <img
          loading="lazy"
          height="24"
          width="24"
          id="provider-logo-dark"
          src="https://authjs.dev/img/providers/google.svg"
        /> */}
        <span>Sign in with Google</span>
      </button>
    </>
    // </form>
  );
}
