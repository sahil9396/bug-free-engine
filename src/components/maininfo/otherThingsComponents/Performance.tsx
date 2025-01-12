import React from "react";

type performancedataType = {
  title: string;
  value: string;
};

const performancedata: performancedataType[] = [
  { title: "Bitcoin Price", value: "$16,545.05" },
  { title: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
  { title: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
  { title: "Trading Volume", value: "$23,249,202,782" },
  { title: "Market Cap Rank", value: "#1" },
  { title: "Market Cap", value: "$323,507,290,047" },
  { title: "Market Cap Dominance", value: "38.34%" },
  { title: "Volume / Market Cap", value: "0.0718" },
];

type lastTwoType = performancedataType & {
  extra: string;
  todayPercent: string;
};

const lastTwo: lastTwoType[] = [
  {
    title: "All Time High",
    value: "$69,044.77",
    extra: "Nov 10, 2021 (about 1 year)",
    todayPercent: "-247290.0%",
  },
  {
    title: "All Time Low",
    value: "$67.81",
    extra: "Jul 06, 2013 (over 9 years)",
    todayPercent: "756.00%",
  },
];

const Performance = () => {
  return (
    <div className="max-w-4xl w-full flex flex-col justify-start items-center p-6 gap-10 rounded-lg bg-white">
      <h2 className="w-full font-inter text-2xl font-semibold leading-7">
        Performance
      </h2>
      <BarGraph />
      <Fundamentals />
    </div>
  );
};

export default Performance;

const BarGraph = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <SliderProgress
        low={46930.22}
        high={49343.83}
        current={48637.83}
        labelLow="Today's Low"
        labelHigh="Today's High"
      />
      <SliderProgress
        low={16930.22}
        high={49743.83}
        current={48637.83}
        labelLow="52W Low"
        labelHigh="52W High"
      />
    </div>
  );
};

type SliderProgressProps = {
  low: number;
  high: number;
  current: number;
  labelLow: string;
  labelHigh: string;
};

const SliderProgress = ({
  low,
  high,
  current,
  labelLow,
  labelHigh,
}: SliderProgressProps) => {
  const calculatePosition = (value: number) => {
    const percentage = ((value - low) / (high - low)) * 100;
    return `${Math.min(Math.max(percentage, 0), 100)}%`;
  };

  return (
    <div className="flex justify-between items-center gap-6">
      <div className="text-center w-fit">
        <p className="text-sm font-normal text-gray-600">{labelLow}</p>
        <p className="text-base font-medium text-gray-800">
          {low.toLocaleString()}
        </p>
      </div>

      <div className="relative flex-1 h-2 w-full sm:w-auto">
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full"
          style={{
            background:
              "linear-gradient(to right, #FF4D4D, #FFA600, #FFFF00, #4CAF50)",
          }}
        ></div>

        <div
          className="absolute top-[-8px] flex flex-col items-center"
          style={{ left: calculatePosition(current) }}
        >
          <div className="w-1 h-8 bg-black rounded-sm"></div>
          <div className="mt-2 text-xs bg-gray-800 text-white px-2 py-1 rounded-lg shadow-md">
            {current.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="text-center w-fit">
        <p className="text-sm font-normal text-gray-600">{labelHigh}</p>
        <p className="text-base font-medium text-gray-800">
          {high.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

const Fundamentals = () => {
  return (
    <div id="Fundamentals" className="w-full h-fit flex flex-col gap-6">
      <p className="w-full font-inter text-2xl font-semibold leading-7 text-left">
        Fundamentals
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {performancedata.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b"
          >
            <div className="text-sm">{item.title}</div>
            <div className="text-sm font-semibold text-gray-900">
              {item.value}
            </div>
          </div>
        ))}
        {lastTwo.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start sm:items-center border-b gap-2 sm:gap-0"
          >
            <div className="text-sm">{item.title}</div>
            <div className="flex flex-col items-end">
              <div className="flex justify-end gap-2">
                <p className="text-sm">{item.value}</p>
                <span
                  className={`text-sm ${
                    item.todayPercent?.includes("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {item.todayPercent}
                </span>
              </div>
              <div className="text-xs text-gray-500">{item.extra}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
