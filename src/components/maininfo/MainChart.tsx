"use client";
// TradingViewWidget.jsx
import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type position = "left" | "right" | "center" | undefined;
type charttype =
  | "area"
  | "line"
  | "bar"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "boxPlot"
  | "radar"
  | "polarArea"
  | "rangeBar"
  | "rangeArea"
  | "treemap"
  | undefined;

type curveType =
  | "smooth"
  | "straight"
  | "stepline"
  | "linestep"
  | "monotoneCubic"
  | ("smooth" | "straight" | "stepline" | "linestep" | "monotoneCubic")[]
  | undefined;

type xaxisType = "numeric" | "datetime" | "category" | undefined;

export const BitcoinPriceChart = () => {
  const length = 100;

  // Generate random price data
  const demoDate = Array.from({ length }, () => {
    return 10000 + Math.random() * 5000; // Random prices between $10,000 and $15,000
  });

  // Generate unique timeline data (dates spanning multiple years)
  const timeLine = Array.from({ length }, (_, i) => {
    const dateThings = new Date();
    dateThings.setDate(dateThings.getDate() - i);
    return `${dateThings.getDate()} ${dateThings.toLocaleString("default", {
      month: "short",
    })} ${dateThings.getFullYear()}`;
  });

  const data = {
    series: [
      {
        name: "Price (USD)",
        data: demoDate,
      },
    ],
    options: {
      chart: {
        type: "area" as charttype,
        zoom: { enabled: false },
        enabledOnSeries: false,
      },
      dataLabels: {
        enabled: false,
      },
      label: {
        enabledOnSeries: false,
      },
      title: {
        text: "Bitcoin Price Chart (USD)",
        align: "left" as position,
      },
      xaxis: {
        categories: timeLine,
        type: "datetime" as xaxisType,
      },
      yaxis: {
        labels: {
          formatter: (value: number) => `$${value.toLocaleString()}`,
        },
      },
      stroke: {
        curve: "smooth" as curveType,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.2,
          stops: [0, 90, 100],
        },
      },
      tooltip: {
        x: { format: "dd MMM yyyy" },
        y: {
          formatter: (value: number) => `$${value.toLocaleString()}`,
        },
      },
      markers: {
        size: 0, // Hide data points
      },
    },
  };

  return (
    <Chart
      options={data.options}
      series={data.series}
      type="area"
      height={500}
    />
  );
};

export function BitHome() {
  return (
    <div className="max-w-[881px] h-[711px] mx-auto bg-white p-6 rounded-lg flex flex-col gap-3">
      <div className="w-full flex justify-start items-center gap-3">
        <div className="py-3 gap-2 flex justify-start items-center">
          <span className="p-4 rounded-full bg-orange-300" />
          <p className="font-inter text-2xl font-semibold leading-7 text-left">
            BitCon
          </p>
          <p className="font-inter text-base font-semibold leading-5 text-left text-[#5D667B]">
            BTC
          </p>
        </div>
        <div className="rounded-lg p-2 border-[#808A9D] bg-gray-400 text-white">
          Rank #1
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-3">
        <div className="flex justify-start items-start gap-8">
          <div>
            <p className="text-[#0B1426] font-inter text-2xl font-semibold leading-[38.4px] text-left">
              $46,953.04
            </p>
            <p className="text-[#0B1426] font-inter text-base font-medium leading-7 text-left">
              ₹ 39,42,343
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-[#14B079] bg-[#EBF9F4] rounded p-2">2.51%</p>
            <p className="text-[#768396] font-inter text-base font-medium leading-7">
              (24H)
            </p>
          </div>
        </div>
        <div className="border" />
        <div className="w-full h-[500px]">
          <BitcoinPriceChart />
        </div>
      </div>
    </div>
  );
}
