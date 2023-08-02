export default function GithubAuthBtn() {
 
  return (
    <form action="https://lucky-plants-cplson.vercel.app/api/auth/signin/github" method="POST" className="flex justify-center w-full mt-8">
      <input
        type="hidden"
        name="csrfToken"
        value="c67b56ed88ddc61609eb112f5fa48d82defdf7636d18de04613d9c3f26249ca4"
      />
      <input
        type="hidden"
        name="callbackUrl"
        value="https://lucky-plants-cplson.vercel.app/"
      />
      <button
        type="submit"
        className="px-6 py-4 border-2 border-gray-300 rounded-lg"
      >
        <div className="flex">
          <img
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
          <span>Sign in with GitHub</span>
        </div>
      </button>
    </form>
  );
}

// csrf token c67b56ed88ddc61609eb112f5fa48d82defdf7636d18de04613d9c3f26249ca4