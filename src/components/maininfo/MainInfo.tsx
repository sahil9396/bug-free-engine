import Image from "next/image";
import React from "react";
import { BitHome } from "./MainChart";
import OtherThings from "./FromTabsToFooter";
import CursorUpButton from "../UpButton";

const demoData = [
  {
    name: "Ethereum(ETH)",
    change: "+8.21%",
  },
  {
    name: "Bitcoin (BTC)",
    change: "-0.80%",
  },
  {
    name: "Polygon (MATIC)",
    change: "-780%",
  },
];

const MainInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full px-2 md:px-[7rem] gap-3 py-2">
      <div className="w-full h-full col-span-8 ">
        <BitHome />
        <OtherThings />
      </div>
      <div className="w-full h-full col-span-8 md:col-span-4 flex flex-col gap-2 ">
        <GetStartedCard />
        <LowerRightMainInfo />
      </div>
      <CursorUpButton />
    </div>
  );
};

export default MainInfo;

const GetStartedCard = () => {
  return (
    <div className="bg-blue-600 text-white w-full h-auto rounded-xl flex flex-col items-center justify-center gap-6 p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold leading-tight">
          Get Started with KoinX for FREE
        </h2>
        <p className="text-sm font-medium mt-2">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
      </div>
      <Image
        src="https://plus.unsplash.com/premium_vector-1730375340082-631882e46655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8OTJ8fHxlbnwwfHx8fHw%3D"
        alt="Get Started"
        width={180}
        height={180}
        className="rounded-lg"
      />
      <button
        type="button"
        className="bg-white text-black py-3 px-6 rounded-lg font-semibold text-lg hover:bg-gray-200"
      >
        Get Started for FREE →
      </button>
    </div>
  );
};

const LowerRightMainInfo = () => {
  return (
    <div className="bg-white w-full h-fit rounded-lg p-6 flex flex-col gap-6">
      <p className="text-2xl font-semibold leading-[28.8px] text-[#0F1629]">
        Trending Coins (24h)
      </p>
      <div className="flex flex-col gap-5">
        {demoData.map((data) => (
          <div key={data.name} className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 bg-[#F0F0F0] rounded-full" />
              <p className="text-[16px] font-inter font-semibold text-[#0F1629]">
                {data.name}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p
                className={`text-lg font-inter font-semibold ${
                  data.change[0] === "+"
                    ? "bg-[#EBF9F4] text-[#14B079]"
                    : "bg-[#FDE8E8] text-[#FF0000]"
                } w-[84px] h-[28px] flex items-center justify-center rounded-[4px]`}
              >
                {data.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

