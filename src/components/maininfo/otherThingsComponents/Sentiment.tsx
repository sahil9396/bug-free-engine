import FooterSlider from "@/components/footerInfo/FooterSlider";
import React from "react";

type sentimentCardType = {
  title: string;
  value: string;
  backgroundColor: string;
  logoColor: string;
};

const sentimentCard: sentimentCardType[] = [
  {
    title: "Buy",
    value: "76%",
    backgroundColor: "bg-blue-50",
    logoColor: "bg-blue-500",
  },
  {
    title: "Hold",
    value: "8%",
    backgroundColor: "bg-green-50",
    logoColor: "bg-green-500",
  },
  {
    title: "Sell",
    value: "16%",
    backgroundColor: "bg-purple-50",
    logoColor: "bg-purple-500",
  },
];

type sentimentDemoType = {
  title: string;
  value: number;
  backgroundColor: string;
};

const sentimentDemoData: sentimentDemoType[] = [
  {
    title: "Buy",
    value: 76,
    backgroundColor: "bg-blue-200",
  },
  {
    title: "Hold",
    value: 8,
    backgroundColor: "bg-green-200",
  },
  {
    title: "Sell",
    value: 16,
    backgroundColor: "bg-purple-200",
  },
];

const Sentiment = () => {
  return (
    <div
      id="Sentiments"
      className="w-full max-w-4xl mx-auto flex flex-col gap-6 p-4 md:p-6 rounded-lg bg-white shadow-lg"
    >
      {/* Header Section */}
      <div className="w-full flex flex-col gap-2">
        <p className="text-xl md:text-2xl font-semibold text-gray-800">
          Sentiment
        </p>
        <p className="text-base md:text-lg font-semibold text-gray-500">
          Key Events
        </p>
      </div>

      {/* Cards Section */}
      <FooterSlider>
        {sentimentCard.map((data, index) => (
          <div
            key={index}
            className={`min-w-[250px] md:min-w-[300px] max-w-[456px] rounded-xl flex flex-col md:flex-row justify-between items-start p-4 gap-4 ${data.backgroundColor}`}
          >
            <div className={`p-4 rounded-full ${data.logoColor}`} />
            <div className="w-full flex flex-col gap-2">
              <p className="text-sm font-medium text-gray-800">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
        ))}
      </FooterSlider>

      {/* Info Section */}
      <div className="w-full flex items-center lg:items-start gap-6 ">
        {/* Highlight Value */}
        <div className="h-full flex justify-center items-center gap-6">
          <span className="bg-[#EBF9F4] text-[#0FBA83] my-auto rounded-full p-6 md:p-8 flex justify-center items-center font-bold text-lg md:text-xl">
            76%
          </span>
        </div>

        {/* Sentiment Bars */}
        <div className="w-full">
          {sentimentDemoData.map((data) => (
            <div
              key={data.title}
              className="flex flex-wrap md:flex-nowrap justify-start items-center gap-2 py-2 pl-2 pr-4 border-b border-gray-200"
            >
              <p className="font-inter text-sm font-medium text-gray-500 w-16">
                {data.title}
              </p>
              <>
                <span
                  className={`${data.backgroundColor} h-[10px] rounded-md inline-block  md:hidden`}
                  style={{
                    width: `${data.value}px`,
                    height: "10px",
                  }}
                />
                <span
                  className={`${data.backgroundColor} h-[10px] rounded-md hidden md:inline-block`}
                  style={{
                    width: `${data.value * 5}px`,
                    height: "10px",
                  }}
                />
              </>
              <p className="font-inter text-sm font-medium text-gray-800">
                {data.value}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
