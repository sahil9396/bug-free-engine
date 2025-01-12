"use client";
import React from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


type position = "bottom" | "top" | "right" | "left" | undefined;

export const PieChart = ({ height }: { height: string }) => {
  const options = {
    chart: {
      background: "#fff",
      foreColor: "#333",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              color: "#333",
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
            },
          },
        },
      },
    },
    labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
    colors: ["#4CAF50", "#2196F3", "#FFC107", "#F44336", "#9C27B0"],
    legend: {
      position: "right" as position,
      labels: {
        colors: "#333",
        useSeriesColors: false,
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (val: number) {
        return val + "%";
      },
    },
  };

  const series = [44, 55, 41, 17, 15];

  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      width="380"
      height={height}
    />
  );
};

export default PieChart;
