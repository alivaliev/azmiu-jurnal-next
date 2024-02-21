import React from "react";
import AccountMenu from "@/components/AccountMenu";
import Link from "next/link";

function Header() {
  return (
    <header className="relative bg-white p-10 shadow">
      <div className="absolute right-[80px] bottom-6">
        Ali Valiev
      </div>
      <div className="absolute right-7 bottom-4">
      <AccountMenu/>
      </div>
    </header>
  );
}

export default Header;
