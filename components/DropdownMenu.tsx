"use client";

import { Menu, X } from "react-feather";
import { useState } from "react";

export default function DropdownMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <button className="mr-12" onClick={toggleActive}>
        {isActive ? (
          <X width={"40"} height={"40"} />
        ) : (
          <Menu className="" width={"40"} height={"40"} />
        )}
      </button>
      {isActive && <h1>menuOpened</h1>}
    </div>
  );
}
