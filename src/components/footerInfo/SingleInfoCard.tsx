// "use client";
// import React, { useEffect, useRef, memo } from "react";

// const SingleInfoCard = () => {
//   const container = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//         {
//           "width": "200",
//           "height": "200",
//           "symbol": "CME:BTC1!",
//           "interval": "D",
//           "timezone": "Etc/UTC",
//           "theme": "light",
//           "style": "2",
//           "locale": "en",
//           "backgroundColor": "rgba(255, 255, 255, 1)",
//           "gridColor": "rgba(255, 255, 255, 0.06)",
//           "hide_top_toolbar": true,
//           "hide_legend": true,
//           "allow_symbol_change": false,
//           "save_image": false,
//           "calendar": false,
//           "hide_volume": true,
//           "support_host": "https://www.tradingview.com"
//         }`;
//     container.current?.appendChild(script);
//   }, []);

//   return (
//     <div className="tradingview-widget-container mx-auto" ref={container}>
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default memo(SingleInfoCard);

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SingleInfoCard = ({ data, color }: { data: number[]; color: string }) => {
  return (
    <Chart
      options={{
        chart: {
          toolbar: { show: false },
          sparkline: { enabled: true },
        },
        stroke: { curve: "smooth", width: 2 },
        // xaxis: { show: false },
        yaxis: { show: false },
        grid: { show: false },
        colors: [color],
      }}
      series={[
        {
          data,
        },
      ]}
      type="line"
      height={60}
    />
  );
};

export default SingleInfoCard;
