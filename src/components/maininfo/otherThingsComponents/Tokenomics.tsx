import React from "react";
import PieChart from "../PieChart";

const Tokenomics = () => {
  return (
    <div id="Tokenomics" className="w-full max-w-4xl mx-auto p-4 md:p-6 bg-white md:flex flex-col gap-6 rounded-lg hidden">
      <h3 className="font-semibold text-xl md:text-2xl text-[#0F1629]">
        Tokenomics
      </h3>
      <div className="flex flex-col gap-4">
        {/* Initial Distribution Header */}
        <h4 className="text-[#1D1D1D] font-semibold text-lg md:text-xl">
          Initial Distribution
        </h4>

        {/* Pie Chart */}
        <div className="w-full h-[180px] md:h-[210px]">
          <PieChart height="100%" />
        </div>

        {/* Description Section */}
        <div className="text-sm md:text-base text-[#3E424A] font-medium leading-relaxed">
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

export default Tokenomics;
