import { Divider, Modal } from "@mui/material";
import Search from "../../components/Search";
import AccountManagementFilter from "../../components/filters/Filter";
import { ISingleAccount } from "../../interfaces/account.interface";
import { Space, Table, TableProps, Tag } from "antd";
import AccountDetails from "./AccountDetails";
import { useState } from "react";
import {
  useGetAccountQuery,
  useGetAccountsQuery,
} from "../../api/accounts.api";
import CustomPagination from "../../components/pagination/CustomPagination";
import ActivateUser from "./ActivateUser";

export default function AccountManagement() {
  const [showModal, setShowModal] = useState(false);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [filterByActive, setfilterByActive] = useState(false);
  const [id, setId] = useState<number | null>(null);
  const [actionType, setActionType] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [filterDate, setFilterDate] = useState<boolean>(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCloseApprovalModal = () => {
    setShowApprovalModal(false);
  };

  const { data: accounts, isLoading } = useGetAccountsQuery({
    page: currentPage,
    limit: 10,
    search: searchVal,
    filter: filterByActive,
    startDate: filterDate ? (startDate as string) : "",
    endDate: filterDate ? endDate : "",
  });

  const results = accounts?.data?.data;
  const total = accounts?.data?.total;

  const { data: userData, isLoading: loadingUser } = useGetAccountQuery({
    id: id as number,
  });

  const customer = userData?.data;

  const columns: TableProps<ISingleAccount>["columns"] = [
    {
      title: "Date",
      key: "date",
      render: (_, row) => {
        const formatDate = (date: any) => {
          const d = new Date(date);
          const day = String(d.getDate()).padStart(2, "0");
          const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-based
          const year = d.getFullYear();
          return `${day}-${month}-${year}`;
        };

        const formattedDate = formatDate(row.createdAt);

        return (
          <Space size="middle" className="">
            <p>{formattedDate}</p>
          </Space>
        );
      },
    },
    {
      title: "User's Name",
      key: "name",
      render: (_, row) => (
        <Space className="">
          {row.firstName}
          {row.lastName}
        </Space>
      ),
    },
    {
      title: "User’s Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      key: "status",
      render: (_, row) => (
        <Space className="">{row.isActive ? "Active" : "Inactive"}</Space>
      ),
    },
    {
      title: "User Action",
      key: "action",
      render: (_, row) => (
        <Space size="middle" className="">
          {!row.isActive ? (
            <Space>
              <Tag
                className="border border-EBD-Primary bg-white cursor-pointer px-5 py-1 text-xs text-EBD-Primary"
                onClick={() => {
                  setId(row.id);
                  setShowModal(true);
                }}
              >
                View
              </Tag>

              <Tag
                className="bg-[#47C96B] px-5 py-1 text-xs cursor-pointer text-white"
                onClick={() => {
                  setId(row.id);
                  setShowApprovalModal(true);
                  setActionType("approve");
                }}
              >
                Approve
              </Tag>

              <Tag
                className="bg-[#D93333] px-5 py-1 text-xs cursor-pointer text-white"
                onClick={() => {
                  setId(row.id);
                  setShowApprovalModal(true);
                  setActionType("reject");
                }}
              >
                Reject
              </Tag>
            </Space>
          ) : (
            <Tag
              className="border border-EBD-Primary bg-white cursor-pointer px-5 py-1 text-xs text-EBD-Primary"
              onClick={() => {
                setId(row.id);
                setShowModal(true);
              }}
            >
              View
            </Tag>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Search searchVal={searchVal} setSearchVal={setSearchVal} />
      <AccountManagementFilter
        filterByActive={filterByActive}
        setfilterByActive={setfilterByActive}
        isBidding={false}
        setStartDate={setStartDate}
        startDate={startDate}
        setEndDate={setEndDate}
        setFilterDate={setFilterDate}
        endDate={endDate}
      />
      <br />
      <Divider />
      <div className="w-full">
        <Table
          columns={columns}
          dataSource={results}
          loading={isLoading}
          pagination={false}
        />
        <div className="w-full py-5 flex justify-end items-center">
          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={total as number}
          />
        </div>
      </div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <AccountDetails customer={customer} isLoading={loadingUser} />
      </Modal>

      <Modal
        open={showApprovalModal}
        onClose={handleCloseApprovalModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <ActivateUser
          customer={`${customer?.firstName} ${customer?.lastName}`}
          setShowApprovalModal={setShowApprovalModal}
          id={id}
          actionType={actionType}
        />
      </Modal>
    </div>
  );
}
