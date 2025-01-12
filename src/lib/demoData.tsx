import { coinType } from "@/types/data";

const length = 10;

export const coinsData: coinType[] = [
  {
    name: "BNB",
    price: "$319.34",
    change: "+0.52%",
    chartColor: "#00C48C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "BNB",
    price: "$319.34",
    change: "+0.52%",
    chartColor: "#00C48C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "BNB",
    price: "$319.34",
    change: "+0.52%",
    chartColor: "#00C48C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "BNB",
    price: "$319.34",
    change: "+0.52%",
    chartColor: "#00C48C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "SOL",
    price: "$109.33",
    change: "-2.89%",
    chartColor: "#FF647C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "XRP",
    price: "$0.634810",
    change: "+0.78%",
    chartColor: "#00C48C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "ADA",
    price: "$0.614869",
    change: "-1.57%",
    chartColor: "#FF647C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
  {
    name: "AVAX",
    price: "$41.05",
    change: "-3.78%",
    chartColor: "#FF647C",
    chartData: Array.from({ length }, () => Math.floor(Math.random() * 100)),
  },
];
