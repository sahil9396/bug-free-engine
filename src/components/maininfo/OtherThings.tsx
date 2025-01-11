import Image from "next/image";
import React from "react";
import PieChart from "./PieChart";

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

const sentimentDemoData = [
  {
    title: "Buy",
    value: "76%",
  },
  {
    title: "Hold",
    value: "8%",
  },
  {
    title: "Sell",
    value: "16%",
  },
];

const OtherThings = () => {
  return (
    <div className="py-5 font-sans flex flex-col gap-5 items-center">
      <div className="flex gap-9 ">
        {tabList.map((tab, index) => (
          <p
            key={index}
            className="px-2 py-2 cursor-pointer border-b border-black"
          >
            {tab}
          </p>
        ))}
      </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
};

export default OtherThings;

const FirstSection = () => {
  return (
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
  );
};

const SecondSection = () => {
  return (
    <div className="w-full max-w-[881px] h-auto flex flex-col justify-between items-center p-6 gap-6 rounded-lg bg-white shadow-lg">
      {/* Cards Section */}
      <div className="w-full flex flex-col gap-4">
        <p className="font-inter text-2xl font-semibold text-gray-800">
          Sentiment
        </p>
        <p className="font-inter text-lg font-semibold text-gray-500">
          Key Events
        </p>

        {/* Cards */}
        <div className="flex w-full gap-4 overflow-x-auto">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[456px] bg-blue-50 rounded-xl flex justify-between items-start p-4 gap-4 shadow-md"
            >
              <div className="p-4 bg-blue-500 rounded-full"></div>
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
        </div>
      </div>

      {/* Info Column */}
      <div className="w-full flex flex-col md:flex-row items-start gap-6">
        <div className="flex items-center gap-6">
          <div className="bg-blue-50 rounded-full p-6 flex justify-center items-center text-blue-500 font-bold text-lg">
            76%
          </div>
        </div>

        <div className="w-full">
          {sentimentDemoData.map((data) => (
            <div
              key={data.title}
              className="flex justify-between items-center py-3 border-b border-gray-200"
            >
              <p className="font-inter text-sm font-medium text-gray-500">
                {data.title}
              </p>
              <p className="font-inter text-sm font-medium text-gray-800">
                {data.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className="w-[881px] h-[995px] p-6 bg-white flex flex-col gap-[24px] rounded-lg ">
      <h2 className="text-2xl font-inter font-semibold leading-[28.8px]">
        About Bitcon
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-[10px]">
          <h3 className="font-bold text-[18px] leading-[21.6px]">
            What is Bitcon
          </h3>
          <p className="text-[16px] leading-[25.6px] font-medium text-[#3E424A]">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>
        <div className="border" />
        <div>
          <h3 className="text-[#0B1426] font-inter text-lg font-bold leading-[21.6px] text-left ">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-[#3E424A] font-medium text-[16px] leading-[25.6px]">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
            <br />
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
            <br />
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
        <div className="border" />
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-2xl leading-[28.8px] text-[#0F1629]">
            Already Holding Bitcon?
          </h3>
          <div className="flex gap-2">
            <div className="w-[388px] h-[151px] rounded-[6.65px] bg-gradient-to-br from-[#FF9865] to-[#EF3031] flex justify-start items-center px-4 gap-4">
              <Image
                src="https://plus.unsplash.com/premium_vector-1730375340082-631882e46655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8OTJ8fHxlbnwwfHx8fHw%3D"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-lg w-[120px] h-[120px]"
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-xl leading-7 text-white">
                  Calculate your Profits
                </h3>
                <button
                  className=" bg-white text-black py-2 px-4 rounded-lg font-inter font-semibold text-[14px] "
                  type="button"
                >
                  Check Now -{">"}
                </button>
              </div>
            </div>
            <div className="w-[388px] h-[151px] rounded-[6.65px] bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] flex justify-start items-center px-4 gap-4">
              <Image
                src="https://plus.unsplash.com/premium_vector-1730375340082-631882e46655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8OTJ8fHxlbnwwfHx8fHw%3D"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-lg w-[120px] h-[120px]"
              />
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-xl leading-7 text-white">
                  Calculate your Profits
                </h3>
                <button
                  className=" bg-white text-black py-2 px-4 rounded-lg font-inter font-semibold text-[14px] "
                  type="button"
                >
                  Check Now -{">"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border" />
        <div className="text-[#3E424A] font-medium text-[16px] leading-[25.6px]">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </div>
      </div>
    </div>
  );
};

const FourthSection = () => {
  return (
    <div className="w-[881px] h-[539px] p-6 bg-white flex flex-col gap-6 rounded-lg">
      <h3 className="font-semibold text-2xl leading-[28.8px] text-[#0F1629]">
        Tokenomics
      </h3>
      <div>
        <h4 className="text-[#1D1D1D] font-semibold text-xl leading-9">
          Initial Distribution
        </h4>
        <div className="w-full h-[210px]">
          <PieChart height="210px" />
        </div>
        <div className="text-[#3E424A] font-medium text-[16px] leading-[25.6px]">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </div>
      </div>
    </div>
  );
};

const engineers = [
  {
    name: "Alice Johnson",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1570622294846-4ff922b50fb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnN8ZW58MHx8MHx8fDA%3D",
    description:
      "Alice is responsible for overseeing the development and dissemination of technology for external customers, vendors, and other clients.",
  },
  {
    name: "Bob Williams",
    role: "Lead Engineer",
    image:
      "https://images.unsplash.com/photo-1565110426846-2f694d651aaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Bob leads the engineering team with a focus on innovation and efficiency, ensuring all projects are completed on time and within budget.",
  },
  {
    name: "John Smith",
    role: "CEO",
    image:
      "https://plus.unsplash.com/premium_photo-1679941668727-7664fef2b6c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnN8ZW58MHx8MHx8fDA%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in n",
  },
];

const FifthSection = () => {
  return (
    <div className=" w-[881px] h-[776px] p-6 bg-white flex flex-col gap-6 rounded-lg">
      <h3>Team</h3>
      <p className="text-[#3E424A] font-medium text-[16px] leading-[25.6px]">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      {engineers.map((engineer) => (
        <Engineer engineer={engineer} key={engineer.name} />
      ))}
    </div>
  );
};

const Engineer = ({
  engineer,
}: {
  engineer: {
    name: string;
    role: string;
    image: string;
    description: string;
  };
}) => {
  return (
    <div className="w-[821px] h-[177.51px] gap-4 border-[1px] border-[#E5E5E5] rounded-[7.46px] bg-[#E8F4FD] flex justify-between items-center p-[11.19px]">
      <div className="w-[400px] flex flex-col justify-center items-center gap-4">
        <Image
          src={engineer.image}
          alt="Picture of the author"
          width={1024}
          height={1024}
          className="rounded-lg w-[96.76px] h-[105.09px] object-cover"
        />
        <div className="w-full gap-[4.12px] flex flex-col justify-center items-center">
          <p className="text-[15px] font-medium text-[#0F1629] leading-[18.15px] text-center text-underline-position-from font-inter">
            {engineer.name}
          </p>
          <p className="text-[12px] font-medium text-[#788F9B] leading-[14.52px] text-center text-underline-position-from font-inter">
            {engineer.role}
          </p>
        </div>
      </div>
      <p className="font-inter text-[14px] font-medium text-[#0F1629] leading-[22.4px] text-left">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </p>
    </div>
  );
};
