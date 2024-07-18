import { Space, Table, TableProps } from "antd";
import BarCharts from "../../components/charts/BarCharts";
import DonutChart from "../../components/charts/RingChart";
import AnalyticsFilter from "../../components/filters/AnalyticsFilter";
import { IBid } from "../../interfaces/bid.interface";
import { Bids } from "../../constants";

export default function Analytics() {
  const chartData: { label: string; number: number }[] = [
    {
      label: "Successful",
      number: 90,
    },
    {
      label: "Failed",
      number: 10,
    },
  ];

    const columns: TableProps<IBid>["columns"] = [
      {
        title: "Date Created",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "BID ID",
        dataIndex: "bid_Id",
        key: "name",
      },
      {
        title: "Bid Description",
        dataIndex: "description",
        key: "email",
      },
      {
        title: "Bidders",
        dataIndex: "count",
        key: "status",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (_, row) => (
          <Space size="middle" className="">
            <p
              className={`${
                row.status === "CLOSED" ? "text-[#B94B72]" : "text-[#269B47]"
              } text-xs font-semibold`}
            >
              {row.status}
            </p>
          </Space>
        ),
      },
    ];

  return (
    <div>
      <AnalyticsFilter />
      <div className="w-full mt-12 flex justify-between">
        <div className="w-[60%] p-5 rounded-lg border border-EBD/Light">
          <p>Total Amount Approved</p>
          <div className="flex mt-1 justify-start items-center gap-2">
            <p className="text-xl font-medium leading-8">₦6,610,500,000</p>
            <div>
              <p className="text-[#269B47] text-xs font-medium">0.67%</p>
            </div>
          </div>

          <div>
            <BarCharts />
          </div>
        </div>

        <div className="w-[28vw]">
          <div className="w-full p-4 border border-EBD/Light h-20 rounded-lg">
            <p className="leading-5 font-medium">Total Vendors</p>
            <div className="flex mt-1 justify-start items-center gap-2">
              <p className="text-xl font-medium leading-8">2,008</p>
              <div>
                <p className="text-[#269B47] text-xs font-medium">0.67%</p>
              </div>
            </div>
          </div>

          <div className="px-5 pt-3 pb-5 mt-6 w-full border flex justify-between items-center border-EBD/Light rounded-lg">
            <div className="w-[40%]">
              <p className="leading-5 font-medium my-4">Bids Report</p>
              <div className="pb-2 border-b my-2 border-EBD/Light">
                <p className="text-xs font-medium">Total Bids</p>
                <div className="flex mt-1 justify-start items-center gap-2">
                  <p className="text-xl font-medium leading-8">386,452</p>
                  <p className="text-[#269B47] text-xs font-medium">1.23%</p>
                </div>
              </div>

              <div className="pb-2 border-b my-2 border-EBD/Light">
                <p className="text-xs font-medium">Total Successful Bids</p>
                <div className="flex mt-1 justify-start items-center gap-2">
                  <p className="text-xl font-medium leading-8">322,452</p>
                  <p className="text-[#269B47] text-xs font-medium">1.23%</p>
                </div>
              </div>

              <div className="pb-2 border-b my-2 border-EBD/Light">
                <p className="text-xs font-medium">Total Failed Bids</p>
                <div className="flex mt-1 justify-start items-center gap-2">
                  <p className="text-xl font-medium leading-8">64,000</p>
                  <p className="text-[#B94B72] text-xs font-medium">0.85%</p>
                </div>
              </div>
            </div>

            <div className="w-[60%]">
              <DonutChart data={chartData} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-5 rounded-lg border border-EBD/Light mt-5">
        <p className="text-md font-medium text-black">Latest Bid Request</p>

        <div className="w-full mt-6">
          <Table
            columns={columns}
            dataSource={Bids}
            // loading={isLoading}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
}
