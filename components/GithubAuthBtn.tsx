import { v4 } from "uuid";
import Link from "next/link";

const getData = () => {
  return v4();
};

export default function GithubAuthBtn() {
  const uuid = getData();
  console.log("uuid:", uuid);
  // const githubId = getData()
  const githubAuth = async () => {
    console.log("inside githubAuth");
    const creds = await fetch(
      `http://localhost:3000/api/auth/callback/github?state=${uuid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("returned to githubAuth(), hopefully with creds:", creds);
  };
  return (
    // <button onClick={githubAuth}>Github</button>
    // <Link href={`https://github.com/login/oauth/authorize?client_id=ff1864eb1456ac704916&state=&state=${uuid}`}>Github</Link>
    // <Link href={"http://localhost:3000/api/auth/callback/github"}>GITHUB</Link>
    // <Link href={`https://github.com/login/oauth/authorize?client_id=ff1864eb1456ac704916&state=412ef0d4-db55-467a-a90e-6483d84640d1`}>Github</Link>
    <form action="http://localhost:3000/api/auth/signin/github" method="POST">
      <input
        type="hidden"
        name="csrfToken"
        value="6f4e6211c15ce2e9e7da1583dc4639635e074942546301ba08a224a7279758c5"
      />
      <input type="hidden" name="callbackUrl" value="http://localhost:3000/shop" />
      <button
        type="submit"
        class="button"
        // style="--provider-bg: #fff; --provider-dark-bg: #000; --provider-color: #000; --provider-dark-color: #fff;"
      >
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
      </button>
    </form>
  );
}
