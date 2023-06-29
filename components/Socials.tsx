import { Instagram, Facebook, Twitter } from "react-feather";

export default function Socials() {
  return (
    <ul className="flex">
      <li className="mx-3">
        <Instagram />
      </li>
      <li className="mx-3">
        <Facebook />
      </li>
      <li className="mx-3">
        <Twitter />
      </li>
    </ul>
  );
}
