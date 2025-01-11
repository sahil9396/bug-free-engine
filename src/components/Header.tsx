import Link from "next/link";
import React from "react";

const navList = [
  {
    name: "CrytoTaxes",
    href: "/",
  },
  {
    name: "Resources",
    href: "/",
  },
  {
    name: "Free Tools",
    href: "/",
  },
];

const Header = () => {
  return (
    <header className="w-full h-[4.95rem] bg-white flex items-center justify-between px-[7rem]">
      <h1 className="text-2xl">Header</h1>
      <div className="flex items-center gap-[2.5rem]">
        <nav className="flex items-center gap-[2rem]">
          {navList.map((navItem) => (
            <Link
              key={navItem.name}
              href={navItem.href}
              className="font-inter text-[16px] font-semibold leading-[19.36px] tracking-[-0.01em] text-left underline-offset-auto decoration-skip-ink"
            >
              {navItem.name}
            </Link>
          ))}
        </nav>
        <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] rounded-[8px] text-white py-2 px-4 font-inter text-[16px] font-semibold leading-[19.36px] tracking-[-0.01em] text-left underline-offset-auto decoration-skip-ink">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
