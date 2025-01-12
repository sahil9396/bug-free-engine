"use client";
import FirstExtraInfo from "@/components/footerInfo/FirstExtraInfo";
import FooterDisplay from "@/components/footerInfo/FooterDisplay";
import SecondExtraInfo from "@/components/footerInfo/SecondExtraInfo";
import { coinsData } from "@/lib/demoData";
import React from "react";

const SmallerScreenFooter = () => {
  return (
    <React.Fragment>
      <FooterDisplay
        title="You may also like"
        coins={coinsData}
        ComponentToUse={FirstExtraInfo}
      />
      <FooterDisplay
        title="Treanding Coins  "
        coins={coinsData}
        ComponentToUse={SecondExtraInfo}
      />
    </React.Fragment>
  );
};

export default SmallerScreenFooter;
