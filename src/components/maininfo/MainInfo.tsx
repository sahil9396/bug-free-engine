import Image from "next/image";
import React from "react";
import MainChat from "./MainChat";

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
    <div className="grid grid-cols-12 w-full h-full px-[7rem] gap-4 py-2">
      <div className="w-full h-full col-span-8 ">
        <MainChat />
      </div>
      <div className="w-full h-full col-span-4 flex flex-col gap-2">
        <div className="bg-[#0052FE] text-white w-[426px] h-[515px] rounded-[16px]">
          <div className="flex flex-col items-center justify-center gap-4 py-[31px] px-[16px]">
            <div className="h-[182px] w-[327px] flex flex-col justify-center items-center gap-4">
              <p className="text-2xl font-inter font-bold leading-[40px] text-center">
                Get Started with KoinX for FREE
              </p>
              <p className="text-sm font-inter font-medium leading-6 text-center">
                With our range of features that you can equip for free, KoinX
                allows you to be more educated and aware of your tax reports.
              </p>
            </div>
            <Image
              src={
                "https://plus.unsplash.com/premium_vector-1730375340082-631882e46655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8OTJ8fHxlbnwwfHx8fHw%3D"
              }
              alt="Picture of the author"
              width={500}
              height={500}
              className="rounded-lg w-[178.66px] h-[166.22px]"
            />
            <button
              type="button"
              className="w-[237px] h-[48px] bg-white text-black py-2 px-4 rounded-lg font-inter font-semibold text-[16px] leading-[28px] "
            >
              Get Started for FREE -&gt;
            </button>
          </div>
        </div>
        <div className="bg-white w-[427px] h-full rounded-lg p-6 flex flex-col gap-6">
          <p className="text-2xl font-semibold leading-[28.8px] text-[#0F1629]">
            Trending Coins (24h)
          </p>
          <div className="flex flex-col gap-5">
            {demoData.map((data) => (
              <div
                key={data.name}
                className="flex justify-between items-center"
              >
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 bg-[#F0F0F0] rounded-full"></div>
                  <p className="text-lg font-inter font-semibold text-[#333333]">
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
      </div>
    </div>
  );
};

export default MainInfo;
