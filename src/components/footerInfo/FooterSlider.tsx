"use client";
import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Props = {
  children: React.ReactNode;
};

const FooterSlider = ({ children }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: any) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center h-full">
      <button
        className="absolute left-0 p-2 bg-white shadow-md rounded-full z-10"
        onClick={() => scroll("left")}
      >
        <FiChevronLeft size={20} />
      </button>
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-hidden px-6 "
      >
        {children}
      </div>
      <button
        className="absolute right-0 p-2 bg-white shadow-md rounded-full z-10"
        onClick={() => scroll("right")}
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
};

export default FooterSlider;
