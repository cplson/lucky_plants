export default function GoogleAuthBtn() {
  return (
    <form action="http://localhost:3000/api/auth/signin/google" method="POST">
      <input
        type="hidden"
        name="csrfToken"
        value="6f4e6211c15ce2e9e7da1583dc4639635e074942546301ba08a224a7279758c5"
      />
      <input type="hidden" name="callbackUrl" value="http://localhost:3000/shop" />
      <button type="submit">
        <img
          loading="lazy"
          height="24"
          width="24"
          id="provider-logo"
          src="https://authjs.dev/img/providers/google.svg"
        />
        <img
          loading="lazy"
          height="24"
          width="24"
          id="provider-logo-dark"
          src="https://authjs.dev/img/providers/google.svg"
        />
        <span>Sign in with Google</span>
      </button>
    </form>
  );
}
