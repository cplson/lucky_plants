"use client";

import { Menu, X } from "react-feather";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import clsx from "clsx";

export default function DropdownMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="relative">
        <button className={clsx("mr-12 border-2 border-black/0", isActive && ' border-black/100 rounded-lg')} onClick={toggleActive}>
          {isActive ? (
            <X width={"40"} height={"40"}/>
          ) : (
            <Menu className="" width={"40"} height={"40"} />
          )}
        </button>
        {isActive && (
          <div className="absolute bg-white p-4 z-10 rounded border-2 border-gray-400 shadow-xl">
            <NavBar isMobile={true} />
          </div>
        )}
      </div>
    </>
  );
}
