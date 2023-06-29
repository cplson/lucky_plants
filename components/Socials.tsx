import { Instagram, Facebook, Twitter } from "react-feather";
import Link from "next/link";

export default function Socials() {
  return (
    <ul className="flex">
      <Link href='https://www.linkedin.com/in/james-jacobsen-67443126b/'>
      <li className="mx-3">
        <Instagram />
      </li>
      </Link>
      <Link href='https://www.linkedin.com/in/james-jacobsen-67443126b/'>
      <li className="mx-3">
        <Facebook />
      </li>
      </Link>
      <Link href='https://www.linkedin.com/in/james-jacobsen-67443126b/'>
      <li className="mx-3">
        <Twitter />
      </li>
      </Link>
    </ul>
  );
}
