export default function GoogleAuthBtn() {
  return (
    <form action={`${process.env.DOMAIN}/api/auth/signin/google`} method="POST" className="w-full flex justify-center mt-4">
      <input
        type="hidden"
        name="csrfToken"
        value="c67b56ed88ddc61609eb112f5fa48d82defdf7636d18de04613d9c3f26249ca4"
      />
      <input type="hidden" name="callbackUrl" value={`${process.env.DOMAIN}`} />
      <button type="submit" className="flex px-6 py-4 border-2 border-gray-300 rounded-lg">
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
    </form>
  );
}
