"use client";
import Link from "next/link";
import React from "react";

const navList = [
  {
    name: "CrytoTaxes",
    href: "/cryptotaxes",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Free Tools",
    href: "/free-tools",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <header className="w-full h-20 bg-white flex items-center justify-between px-4 md:px-28 shadow-md">
      <h1 className="text-2xl font-bold lg:pl-[3rem]">Header</h1>
      <div className="hidden lg:flex items-center gap-10">
        <nav className="flex items-center gap-8">
          {navList.map((navItem) => (
            <Link
              key={navItem.name}
              href={navItem.href}
              className="font-inter text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              {navItem.name}
            </Link>
          ))}
        </nav>
        <Link
          href={"/"}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white py-2 px-4 font-inter text-lg font-semibold hover:from-blue-500 hover:to-blue-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-4xl">
          ☰
        </button>
        {isMenuOpen && (
          <nav className="fixed inset-0 bg-white flex flex-col gap-4 z-50 p-4 animate-slide-in">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl self-end"
            >
              ✕
            </button>
            {navList.map((navItem) => (
              <Link
                key={navItem.name}
                href={navItem.href}
                className="font-inter text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              >
                {navItem.name}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white py-2 px-4 font-inter text-lg font-semibold hover:from-blue-500 hover:to-blue-700 transition-colors">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
