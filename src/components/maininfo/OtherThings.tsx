import React from "react";

const tabList = [
  "Overview",
  "Fundamentals",
  "New Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const fundamentalsData = [
  {
    title: "Bitcon Price",
    value: "$16,545.05",
  },
  {
    title: "24h Low / 24h High",
    value: "$16,545.05 / $16,545.05",
  },
  {
    title: "7d Low / 7d High",
    value: "$16,545.05 / $16,545.05",
  },
  {
    title: "Trading Volume",
    value: "$16,545.05",
  },
  {
    title: "Market Cap Rank",
    value: "#1",
  },
  {
    title: "Market Cap",
    value: "$16,656,545.05",
  },
  {
    title: "Market Cap Dominance",
    value: "45.00%",
  },
  {
    title: "Volume / Market Cap",
    value: "0.0001",
  },
  {
    title: "All Time High",
    value: "$20,000.00",
  },
  {
    title: "All Time Low",
    value: "$0.01",
  },
];

const OtherThings = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
        }}
      >
        {tabList.map((tab, index) => (
          <p
            key={index}
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #000",
            }}
          >
            {tab}
          </p>
        ))}
      </div>
      <div className="w-[881px] h-[632px] flex flex-col justify-between items-center p-6 gap-6 rounded-lg bg-white">
        {/* Header */}
        <p className="font-inter text-2xl font-semibold leading-7 text-left">
          Performance
        </p>

        {/* Today's Thing */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="m-0">Today's Low</p>
              <p className="m-0 font-bold">46930.22</p>
            </div>
            <div className="flex-1 mx-5">
              <div className="h-2 bg-gray-300 rounded">
                <div className="w-1/2 h-full bg-teal-400 rounded" />
              </div>
            </div>
            <div className="text-center">
              <p className="m-0">Today's High</p>
              <p className="m-0 font-bold">49343.22</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="m-0">24h Low</p>
              <p className="m-0 font-bold">46000.00</p>
            </div>
            <div className="flex-1 mx-5">
              <div className="h-2 bg-gray-300 rounded">
                <div className="w-3/4 h-full bg-teal-400 rounded" />
              </div>
            </div>
            <div className="text-center">
              <p className="m-0">24h High</p>
              <p className="m-0 font-bold">50000.00</p>
            </div>
          </div>
        </div>

        {/* Info col */}
        <div className="w-full h-fit flex flex-col gap-6">
          <p className="font-inter text-2xl font-semibold leading-7 text-left">
            Fundamentals
          </p>
          <div className="grid grid-cols-2 grid-rows-5 gap-x-24">
            {fundamentalsData.map((data) => (
              <div
                key={data.title}
                className="flex justify-between items-center py-3 border-b"
              >
                <p className="font-inter text-[14px] font-medium leading-[20px] text-left text-[#768396]">
                  {data.title}
                </p>
                <p className="text-[#111827] font-inter text-[13px] font-medium leading-[20px] text-right">
                  {data.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherThings;
