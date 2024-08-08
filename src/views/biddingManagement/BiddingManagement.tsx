import Search from "../../components/Search";
import Filters from "../../components/filters/Filter";
import { IBid } from "../../interfaces/bid.interface";
import { Space, Table, TableProps, Tag } from "antd";
import { Bids } from "../../constants";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";

export default function BiddingManagement() {
  const navigate = useNavigate()
  const columns: TableProps<IBid>["columns"] = [
    {
      title: "Date Created",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Auction ID",
      dataIndex: "bid_Id",
      key: "name",
    },
    {
      title: "Auction Description",
      dataIndex: "description",
      key: "email",
    },
    {
      title: "Bids",
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
    {
      title: "User Action",
      key: "action",
      render: () => (
        <Space size="middle" className="">
          <Tag className="border border-EBD-Primary bg-white cursor-pointer px-5 py-1 text-xs text-EBD-Primary" onClick={()=>navigate(`${paths.VIEW_BID}`)}>
            View
          </Tag>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Search />
      <Filters isBidding />
      <br />
      <Divider />
      <div className="w-full">
        <Table
          columns={columns}
          dataSource={Bids}
          // loading={isLoading}
          pagination={false}
        />
      </div>
    </div>
  );
}
