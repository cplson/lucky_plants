

export default function GithubAuthBtn() {
 
  return (
    <form action="http://localhost:3000/api/auth/signin/github" method="POST" className="flex justify-center w-full mt-8">
      <input
        type="hidden"
        name="csrfToken"
        value="6f4e6211c15ce2e9e7da1583dc4639635e074942546301ba08a224a7279758c5"
      />
      <input
        type="hidden"
        name="callbackUrl"
        value="http://localhost:3000/shop"
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
