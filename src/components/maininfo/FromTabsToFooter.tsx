import React from "react";
import Sentiment from "./otherThingsComponents/Sentiment";
import About from "./otherThingsComponents/About";
import Tokenomics from "./otherThingsComponents/Tokenomics";
import Team from "./otherThingsComponents/Team";
import Performance from "./otherThingsComponents/Performance";
import Tabs from "./otherThingsComponents/Tabs";

const tabList = [
  "Overview",
  "Fundamentals",
  "New-Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const OtherThings = () => {
  return (
    <div className="py-5 font-sans flex flex-col gap-5 items-center">
      <Tabs tabList={tabList} />
      <Performance />
      <Sentiment />
      <About />
      <Tokenomics />
      <Team />
    </div>
  );
};

export default OtherThings;
