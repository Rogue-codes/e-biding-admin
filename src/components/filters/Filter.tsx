import { Button } from "@mui/material";
import { DatePicker, DatePickerProps } from "antd";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";

interface IFilters {
  isBidding: boolean;
}
export default function Filters({ isBidding }: IFilters) {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate()
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
            onChange={onChange}
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
            textTransform:"capitalize"
          }}
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
          onClick={()=>navigate(`${paths.CREATE_BID}`)}
        >
          <AddCircleIcon />
          Create Bid Request
        </Button>
      ) : (
        <div className="flex justify-start items-center gap-3">
          <div
            className="w-4 h-4 border rounded-sm flex justify-center items-center cursor-pointer border-EBD/Darkest"
            onClick={() => setIsChecked(!isChecked)}
          >
            {isChecked && (
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
