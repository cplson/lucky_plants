import { Link as LinkType } from "@/lib/types";
import NavLink from "@/components/NavLink";
import SignIOBtn from "./SignIOBtn";

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
            <li key={link.path} className={"text-lg my-1 mx-0"}>
              <NavLink link={link} />
            </li>
          );
        })}
        {isMobile && (
          <>
            <hr className="w-full my-2" />
            <li className={"text-lg text-gray-600 hover:text-green-700"}>
              <SignIOBtn />
            </li>
          </>
        )}
      </ul>
    </>
  );
}
