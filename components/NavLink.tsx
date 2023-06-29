"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLink = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.path) {
    isActive = true;
  }

  return (
    <Link href={link.path} className="mx-2">
      <span className={clsx('text-lg', isActive && 'stroke-green-700')}>{link.text}</span>
    </Link>
  );
};

export default NavLink;
