import SingleInfoCard from "./SingleInfoCard";
import React from "react";

const FirstExtraInfo = ({
  coin,
}: {
  coin: {
    name: string;
    change: string;
    price: string;
    chartColor: string;
    chartData: number[];
  };
}) => {
  return (
    <div className="w-[200px] border border-gray-200 bg-white rounded-lg p-4 flex flex-col gap-2">
      <div className="flex justify-start items-center gap-2 w-full">
        <div className="w-8 h-8 bg-[#F0F0F0] rounded-full flex justify-center items-center">
          J
        </div>

        <p className="text-[16px] font-inter font-semibold text-[#333333]">
          {coin.name}
        </p>

        <p
          className={`text-lg font-inter font-normal rounded-[10px] py-2 px-2 text-[12px] leading-[14.52px] ${
            coin.change.includes("-")
              ? "text-red-500 bg-red-200"
              : "text-[#32BE88] bg-[#0AB27D0F]"
          }`}
        >
          {coin.change}
        </p>
      </div>
      <p className="text-lg font-inter font-normal text-start text-[#333333] text-[12px] leading-[14.52px] ">
        {coin.price}
      </p>

      {/* Chart */}
      <SingleInfoCard data={coin.chartData} color={coin.chartColor} />
    </div>
  );
};

export default FirstExtraInfo;
