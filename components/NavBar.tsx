import { Link as LinkType } from "@/lib/types";
import NavLink from "@/components/NavLink";
import clsx from "clsx";
import Link from "next/link";

const links: LinkType[] = [
  { text: "Shop", path: "/shop" },
  { text: "Our Story", path: "/about" },
  { text: "Journal", path: "/journal" },
  { text: "Contact", path: "/contact" },
];

export default function NavBar({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <ul className="flex flex-col items-start  md:flex-row md:items-center">
        {links.map((link) => {
          return (
            <li className={"text-lg my-1 mx-0"}>
              <NavLink link={link} />
            </li>
          );
        })}
        {isMobile && (
          <>
            <hr className="w-full my-2" />
            <li className={"text-lg text-gray-600 hover:text-green-700"}>
              <Link href="/signout">Sign Out</Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
}
