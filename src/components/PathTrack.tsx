"use client";
import { usePathname } from "next/navigation";
import React from "react";

const PathTrack = () => {
  const path = usePathname().split("/")[1];
  return (
    <div className="p-2 md:px-[10rem] flex justify-start items-center gap-3 ">
      <span className="text-[#3E5765] font-inter text-[14px] font-normal leading-[16.94px] text-left ">
        Cryptocurrencies
      </span>
      {">>"}
      <p>
        {path === "" ? "BitCoin" : path.charAt(0).toUpperCase() + path.slice(1)}
      </p>
    </div>
  );
};

export default PathTrack;
