"use client";

import { Menu, X } from "react-feather";
import { useState } from "react";
import NavBar from "./NavBar";

export default function DropdownMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="relative">
        <button className="mr-12" onClick={toggleActive}>
          {isActive ? (
            <X width={"40"} height={"40"} />
          ) : (
            <Menu className="" width={"40"} height={"40"} />
          )}
        </button>
        {isActive && (
          <div className="absolute bg-gray-100">
            <NavBar isMobile={true} />
          </div>
        )}
      </div>
    </>
  );
}
