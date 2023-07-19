import { Instagram, Facebook, Twitter } from "react-feather";
import Link from "next/link";

type SocialProps = {
  className?: string;
};
export default function Socials() {
  return (
    <div className="w-full">
      <ul className="flex justify-center">
        <Link href="https://www.linkedin.com/in/james-jacobsen-67443126b/">
          <li className="mx-3">
            <Instagram />
          </li>
        </Link>
        <Link href="https://www.linkedin.com/in/james-jacobsen-67443126b/">
          <li className="mx-3">
            <Facebook />
          </li>
        </Link>
        <Link href="https://www.linkedin.com/in/james-jacobsen-67443126b/">
          <li className="mx-3">
            <Twitter />
          </li>
        </Link>
      </ul>
    </div>
  );
}
