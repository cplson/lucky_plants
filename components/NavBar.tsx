import { Link } from "@/lib/types";
import NavLink from "@/components/NavLink";
import clsx from "clsx";

const links: Link[] = [
  { text: "Shop", path: "/shop" },
  { text: "Our Story", path: "/about" },
  { text: "Journal", path: "/journal" },
  { text: "Contact", path: "/contact" },
];

export default function NavBar({isMobile}: {isMobile: boolean}) {
  return (
    <>
    <ul className="flex flex-col items-start md:flex-row md:items-center">
      {links.map((link) => {
        return <li className={"text-lg"}><NavLink link={link} /></li>;
      })}
    </ul>
      </>
  );
}
