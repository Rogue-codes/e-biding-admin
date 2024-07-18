import { Divider, Modal } from "@mui/material";
import Search from "../../components/Search";
import AccountManagementFilter from "../../components/filters/Filter";
import { IAccount } from "../../interfaces/account.interface";
import { Space, Table, TableProps, Tag } from "antd";
import { Accounts } from "../../constants";
import AccountDetails from "./AccountDetails";
import { useState } from "react";

export default function AccountManagement() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const columns: TableProps<IAccount>["columns"] = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "User's Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "User’s Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "User Action",
      key: "action",
      render: (_, row) => (
        <Space size="middle" className="">
          {row.status === "Pending" ? (
            <Space>
              <Tag
                className="border border-EBD-Primary bg-white cursor-pointer px-5 py-1 text-xs text-EBD-Primary"
                onClick={() => setShowModal(true)}
              >
                View
              </Tag>

              <Tag className="bg-[#47C96B] px-5 py-1 text-xs cursor-pointer text-white">
                Approve
              </Tag>

              <Tag className="bg-[#D93333] px-5 py-1 text-xs cursor-pointer text-white">
                Reject
              </Tag>
            </Space>
          ) : (
            <Tag className="border border-EBD-Primary bg-white cursor-pointer px-5 py-1 text-xs text-EBD-Primary">
              View
            </Tag>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Search />
      <AccountManagementFilter isBidding={false} />
      <br />
      <Divider />
      <div className="w-full">
        <Table
          columns={columns}
          dataSource={Accounts}
          // loading={isLoading}
          pagination={false}
        />
      </div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <AccountDetails />
      </Modal>
    </div>
  );
}
