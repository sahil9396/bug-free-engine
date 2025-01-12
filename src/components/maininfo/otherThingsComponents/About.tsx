import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="New-Insights"
      className="w-full max-w-4xl mx-auto p-4 md:p-6 bg-white flex flex-col gap-6 rounded-lg"
    >
      <h2 className="text-xl md:text-2xl font-inter font-semibold">
        About Bitcoin
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg md:text-xl">What is Bitcoin</h3>
          <p className="text-sm md:text-base font-medium text-[#3E424A]">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className="border" />

        <div className="flex flex-col gap-4">
          <h3 className="text-[#0B1426] font-inter text-lg font-bold">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-sm md:text-base text-[#3E424A] font-medium flex flex-col gap-4">
            <span>
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
              lobortis tristique pharetra. Diam id et lectus urna et tellus
              aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus. Ultricies urna volutpat suspendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus.
            </span>
            <span>
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus
              phasellus velit in senectus enim dui. Turpis tristique placerat
              interdum sed volutpat. Id imperdiet magna eget eros donec cursus
              nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
              Integer dignissim augue viverra nulla et quis lobortis phasellus.
              Integer pellentesque enim convallis ultricies at.
            </span>
            <span>
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
              congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
              eget. Ullamcorper dui
            </span>
          </p>
        </div>

        <div className="border" />

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl md:text-2xl text-[#0F1629]">
            Already Holding Bitcoin?
          </h3>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Card 1 */}
            <div className="w-full md:w-[388px] h-auto rounded-md bg-gradient-to-br from-[#FF9865] to-[#EF3031] flex justify-start items-center p-4 gap-4">
              <Image
                src="https://plus.unsplash.com/premium_vector-1730375340082-631882e46655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8OTJ8fHxlbnwwfHx8fHw%3D"
                alt="Bitcoin Profits"
                width={120}
                height={120}
                className="rounded-lg w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base md:text-xl text-white">
                  Calculate your Profits
                </h3>
                <button
                  className="bg-white text-black py-2 px-4 rounded-lg font-inter font-semibold text-sm md:text-base"
                  type="button"
                >
                  Check Now -{">"}
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-full md:w-[388px] h-auto rounded-md bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] flex justify-start items-center p-4 gap-4">
              <Image
                src="https://plus.unsplash.com/premium_vector-1730375340082-631882e46655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8OTJ8fHxlbnwwfHx8fHw%3D"
                alt="Bitcoin Profits"
                width={120}
                height={120}
                className="rounded-lg w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base md:text-xl text-white">
                  Calculate your Profits
                </h3>
                <button
                  className="bg-white text-black py-2 px-4 rounded-lg font-inter font-semibold text-sm md:text-base"
                  type="button"
                >
                  Check Now -{">"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border" />

        {/* Final Section */}
        <div className="text-sm md:text-base text-[#3E424A] font-medium">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui.
        </div>
      </div>
    </div>
  );
};

export default About;
