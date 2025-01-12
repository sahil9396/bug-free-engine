"use client";
import FooterSlider from "@/components/footerInfo/FooterSlider";
import Link from "next/link";
import React, { useState } from "react";

const Tabs = ({ tabList }: { tabList: string[] }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex gap-4 md:gap-9 w-full max-w-4xl border-b border-gray-300">
      <FooterSlider>
        {tabList.map((tab, index) => (
          <Link
            key={index}
            href={`#${tab}`}
            className={`px-4 py-2 cursor-pointer whitespace-nowrap ${
              selectedTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-700 hover:text-black"
            }`}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
          </Link>
        ))}
      </FooterSlider>
    </div>
    // </div>
  );
};

export default Tabs;
