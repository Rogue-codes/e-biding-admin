import { BarChart } from "@mui/x-charts/BarChart";

export default function BarCharts() {
  return (
    // <div>
    //   <BarChart
    //     xAxis={[
    //       {
    //         id: "barCategories",
    //         data: [
    //           "JAN",
    //           "FEB",
    //           "MAR",
    //           "APR",
    //           "MAY",
    //           "JUN",
    //           "JUL",
    //           "AUG",
    //           "SEP",
    //           "OCT",
    //           "NOV",
    //           "DEC",
    //         ],
    //         scaleType: "band",
    //       },
    //     ]}
    //     series={[
    //       {
    //         data: [400, 100, 600, 800, 700, 200, 300, 600, 400, 600, 700, 800],
    //       },
    //     ]}
    //     width={600}
    //     height={400}
    //     margin={{
    //       left: 80,
    //       right: 80,
    //       top: 80,
    //       bottom: 80,
    //     }}
    //   />
    // </div>
    <div>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: [
              "JAN",
              "FEB",
              "MAR",
              "APR",
              "MAY",
              "JUN",
              "JUL",
              "AUG",
              "SEP",
              "OCT",
              "NOV",
              "DEC",
            ],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [400, 100, 600, 800, 700, 200, 300, 600, 400, 600, 700, 800],
            color: "#3E4095",
          },
        ]}
        width={650}
        height={300}
      />
    </div>
  );
}
