import { Button } from "@mui/material";
import { DatePicker, DatePickerProps } from "antd";
import { useState } from "react";
import IosShareSharpIcon from "@mui/icons-material/IosShareSharp";
export default function AnalyticsFilter() {
  const [timeline, setTimeline] = useState("Week");

  const timelineArr = ["Week", "Month", "Year"];

  const handleTimelineChange = (timeline: string) => {
    setTimeline(timeline);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="w-full py-2 flex justify-between items-center">
      <div className="flex justify-start items-center gap-2">
        {timelineArr.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTimelineChange(item)}
            className={`px-2 py-1 text-sm font-medium rounded-[4px] hover:scale-105 transition-all ${
              timeline === item
                ? "bg-EBD-Primary text-white border-none"
                : "bg-transparent border border-EBD/Light"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

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
            textTransform: "capitalize",
          }}
        >
          Apply filter
        </Button>
      </div>

      <Button
        sx={{
          height: "30px",
          borderRadius: "8px",
          backgroundColor: "#3E4095",
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          color: "#ffffff",
          fontSize: "12px",
          "&:hover": {
            backgroundColor: "#3E4095",
          },
          textTransform: "capitalize",
        }}
      >
        <IosShareSharpIcon sx={{
          fontSize: "14px",
        }}/>
        Export
      </Button>
    </div>
  );
}
