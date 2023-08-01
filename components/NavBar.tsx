import { Link as LinkType } from "@/lib/types";
import NavLink from "@/components/NavLink";
import SignIOBtn from "./SignIOBtn";
import Cart from "./Cart";

const links: LinkType[] = [
  { text: "Shop", path: "/shop" },
  { text: "Our Story", path: "" },
  { text: "Journal", path: "" },
  { text: "Contact", path: "" },
];

export default function NavBar({ isMobile, turnInactive }: { isMobile: boolean, turnInactive: () => void }) {
  return (
    <>
      <ul className="flex flex-col items-start  lg:flex-row lg:items-center">
        {links.map((link) => {
          return (
            <li key={link.text} className={"my-1 mx-0"} onClick={turnInactive}>
              <NavLink link={link} />
            </li>
          );
        })}
        {isMobile && (
          <>
            <hr className="w-full my-2" />
            
            <li className={"text-lg text-gray-600 hover:text-green-700"}>
              <SignIOBtn turnInactive={turnInactive}/>
            </li>
          </>
        )}
      </ul>
    </>
  );
}
