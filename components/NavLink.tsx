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
    <Link href={link.path} className="mx-2">
      <li className={clsx("text-lg", isActive && "stroke-green-700")}>
        {link.text}
      </li>
    </Link>
  );
};

export default NavLink;
