import { Instagram, Facebook, Twitter, Linkedin, GitHub } from "react-feather";
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
            <Linkedin />
          </li>
        </Link>
        <Link href="https://github.com/cplson">
          <li className="mx-3">
            <GitHub />
          </li>
        </Link>
        
      </ul>
    </div>
  );
}
