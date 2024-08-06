import { Button } from "@mui/material";
import { DatePicker, DatePickerProps } from "antd";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";
import { enqueueSnackbar } from "notistack";
import dayjs from "dayjs";
interface IFilters {
  isBidding: boolean;
  filterByActive: boolean;
  setfilterByActive: React.Dispatch<React.SetStateAction<boolean>>;
  setStartDate: React.Dispatch<React.SetStateAction<string | null>>;
  setEndDate: React.Dispatch<any>;
  startDate: string | null;
  setFilterDate: React.Dispatch<React.SetStateAction<boolean>>;
  endDate: any;
}
export default function Filters({
  isBidding,
  filterByActive,
  setfilterByActive,
  setStartDate,
  setEndDate,
  startDate,
  setFilterDate,
  endDate,
}: IFilters) {
  const onChange: DatePickerProps["onChange"] = (_date, dateString) => {
    setStartDate(dateString as string);
  };

  const onChangeEndDate: DatePickerProps["onChange"] = (_date, dateString) => {
    setEndDate(dateString);
  };

  const today = dayjs(startDate).startOf("day");

  const navigate = useNavigate();
  return (
    <div className="w-full mt-5 justify-between items-center flex">
      <div className="flex justify-start items-center gap-3">
        <div className="w-[11rem] h-[30px] border border-EBD/Light rounded-md">
          <DatePicker
            className="w-full border-none h-full"
            onChange={onChange}
          />
        </div>

        <p>--</p>

        <div className="w-[11rem] h-[30px] border border-EBD/Light rounded-md">
          <DatePicker
            className="w-full border-none h-full"
            onChange={onChangeEndDate}
            // maxDate={}
            minDate={today}
          />
        </div>
        <Button
          sx={{
            height: "30px",
            borderRadius: "8px",
            backgroundColor: "#3E4095",
            color: "#ffffff",
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "#3E4095",
            },
            textTransform: "capitalize",
          }}
          disabled={!startDate && !endDate}
          onClick={() => setFilterDate(true)}
          className="disabled:opacity-50"
        >
          Apply filter
        </Button>
      </div>

      {isBidding ? (
        <Button
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
            width: "11rem",
            borderRadius: "8px",
            backgroundColor: "#3E4095",
            color: "#ffffff",
            padding: "8px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#3E4095",
            },
          }}
          onClick={() => navigate(`${paths.CREATE_BID}`)}
        >
          <AddCircleIcon />
          Create Bid Request
        </Button>
      ) : (
        <div className="flex justify-start items-center gap-3">
          <div
            className="w-4 h-4 border rounded-sm flex justify-center items-center cursor-pointer border-EBD/Darkest"
            onClick={() => setfilterByActive(!filterByActive)}
          >
            {filterByActive && (
              <DoneIcon
                sx={{
                  fontSize: "12px",
                }}
              />
            )}
          </div>
          <p className="text-xs font-medium text-EBD/Darkest">
            Filter only approval requests
          </p>
        </div>
      )}
    </div>
  );
}
