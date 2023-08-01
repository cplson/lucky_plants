import Link from "next/link";
import clsx from "clsx";
import { LinkProps } from "@/lib/types";
import { FC } from "react";

const NavLink: FC<LinkProps> = ({ link }) => {
  
 

  return (
    <Link href={link.path} className={clsx("md:mr-2 border-2 md:my-0 border-green-700/0 md:hover:border-b-green-700")}>  
        <span className={"whitespace-nowrap text-gray-600 hover:text-green-700 lg:text-lg xl:text-xl"}>{link.text}</span>
    </Link>
  );
};

export default NavLink;
