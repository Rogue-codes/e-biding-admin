import { Button } from "@mui/material";
import React from "react";

interface IBid {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Bid({ setShowModal }: IBid) {
  return (
    <div className="w-full flex mt-3 justify-start items-start gap-5 border-b border-EBD/Light pb-3">
      <div>
        <p>Date Submitted:</p>
        <p className="mt-3">Company:</p>
        <p className="mt-3">Bid Amount:</p>
        <Button
          sx={{
            background: "#3E4095",
            color: "#ffffff",
            "&:hover": {
              background: "#3E4095",
            },
          }}
          className="py-1 !mt-3 px-3 !text-xs font-medium rounded-[4px] border border-EBD-Primary"
          onClick={() => setShowModal(true)}
        >
          View Bid
        </Button>
      </div>
      <div>
        <p>01-03-2024</p>
        <p className="mt-3">KENNY CONSTRUCTIONS LTD</p>
        <p className="mt-3">₦8,500,000</p>
      </div>
    </div>
  );
}
