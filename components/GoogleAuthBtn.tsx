export default function GoogleAuthBtn() {
  return (
    <form action="https://lucky-plants-cplson.vercel.app/api/auth/signin/google" method="POST" className="w-full flex justify-center mt-4">
      <input
        type="hidden"
        name="csrfToken"
        value="6f4e6211c15ce2e9e7da1583dc4639635e074942546301ba08a224a7279758c5"
      />
      <input type="hidden" name="callbackUrl" value="https://lucky-plants-cplson.vercel.app" />
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
