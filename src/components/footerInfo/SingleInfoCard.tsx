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
