import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface DonutChartProps {
  data: {
    label: string;
    number: number;
  }[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  // Ensure data is an array with a default empty array
  const seriesData = data ? data.map((item) => item.number) : [];

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "bottom",
    },
    labels: ["Not Started", "Completed"],
    colors: ["#3E4095", "#B94B72"],
  };

  return (
    <div className="donut-chart">
      <Chart
        options={options}
        series={seriesData}
        type="donut"
        width="200"
        height={300}
      />
    </div>
  );
};

export default DonutChart;

// import { Pie } from "@ant-design/plots";
// import { FC } from "react";

// interface DataItem {
//   type: string;
//   value: number;
//   color: string;
// }

// const Chart: FC = () => {
//   const data: DataItem[] = [
//     { type: "successful", value: 80, color: "green" },
//     { type: "failed", value: 20, color: "red" },
//   ];

//   const config = {
//     data,
//     angleField: "value",
//     colorField: "type", // or seriesField in some cases
//     color: ["#19CDD7", "#DDB27C"],

//     paddingRight: 80,
//     innerRadius: 0.6,
//     label: {
//       text: "value",
//       style: {
//         fontWeight: "bold",
//       },
//     },
//     annotations: [
//       {
//         type: "text",
//         style: {
//           text: "Total Bids",
//           x: "50%",
//           y: "50%",
//           textAlign: "center",
//           fontSize: 12,
//           fontStyle: "bold",
//         },
//         formatter: function formatter() {
//           return `total\n134`;
//         },
//       },
//     ],
//   };

//   return (
//     <div className="bg-white">
//       <Pie
//         width={300}
//         height={200}
//         {...config}
//         legend={false}
//         colorField={"type"}
//       />
//     </div>
//   );
// };

// export default Chart;
