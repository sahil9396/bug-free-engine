"use client";
import React from "react";
import FirstExtraInfo from "./FirstExtraInfo";
import SecondExtraInfo from "./SecondExtraInfo";
import FooterSlider from "./FooterSlider";

const FooterInfo = () => {
  return (
    <div className="w-full h-[628px] p-[7rem] bg-white">
      <Helper
        title="Top Gainers"
        coins={coinsData}
        ComponentToUse={FirstExtraInfo}
      />
      <Helper
        title="Top Losers"
        coins={coinsData}
        ComponentToUse={SecondExtraInfo}
      />
    </div>
  );
};

export default FooterInfo;

type coinType = {
  name: string;
  price: string;
  change: string;
  chartColor: string;
  chartData: number[];
};

const length = 10;

const coinsData = [
  {
    name: "BNB",
    price: "$319.34",
    change: "+0.52%",
    chartColor: "#00C48C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "BNB",
    price: "$319.34",
    change: "+0.52%",
    chartColor: "#00C48C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "BNB",
    price: "$319.34",
    change: "+0.52%",
    chartColor: "#00C48C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "BNB",
    price: "$319.34",
    change: "+0.52%",
    chartColor: "#00C48C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "SOL",
    price: "$109.33",
    change: "-2.89%",
    chartColor: "#FF647C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "XRP",
    price: "$0.634810",
    change: "+0.78%",
    chartColor: "#00C48C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "ADA",
    price: "$0.614869",
    change: "-1.57%",
    chartColor: "#FF647C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "AVAX",
    price: "$41.05",
    change: "-3.78%",
    chartColor: "#FF647C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
];

const Helper = ({
  title,
  coins,
  ComponentToUse,
}: {
  title: string;
  coins: coinType[];
  ComponentToUse: React.FC<{
    coin: coinType;
  }>;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <FooterSlider>
        {coins.map((coin, index) => (
          <ComponentToUse key={index} coin={coin} />
        ))}
      </FooterSlider>
    </div>
  );
};
