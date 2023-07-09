"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LinkProps } from "@/lib/types";
import { FC } from "react";


// Each Navigation Link is returned from here
// we use usePathname to determine if this is the Link that is active
const NavLink: FC<LinkProps> = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  // determine if this link is active
  if (pathname === link.path) {
    isActive = true;
  }

  return (
    <Link href={link.path} className={clsx("mx-2", isActive && "stroke-green-100 border-black", link.text == 'Shop' && "shrink")}>  
        {link.text}
    </Link>
  );
};

export default NavLink;
