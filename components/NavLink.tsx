
import Link from "next/link";
import clsx from "clsx";
import { LinkProps } from "@/lib/types";
import { FC } from "react";


// Each Navigation Link is returned from here
// we use usePathname to determine if this is the Link that is active
const NavLink: FC<LinkProps> = ({ link }) => {
  
 

  return (
    <Link href={link.path} className={clsx("mx-2 hover:text-green-700 border-2 border-green-700/0 hover:border-b-green-700")}>  
        <span className={"whitespace-nowrap lg:text-xl"}>{link.text}</span>
    </Link>
  );
};

export default NavLink;
