import FileUploadSharpIcon from "@mui/icons-material/FileUploadSharp";
import { Button, Divider, Modal } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Bid from "./Bid";
import { useState } from "react";
import ViewBidModal from "./ViewBidModal";

export default function ViewBid() {
    const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  }
  return (
    <div className="w-full flex justify-between items-start">
      {/* left */}
      <div className="w-[45%]">
        <div className="flex w-full justify-between items-end">
          <div>
            <p className="text-xs font-bold text-EBD/Medium">Bid ID</p>
            <p className="text-xl leading-6 font-semibold text-EBD/Darkest mt-2">
              NGA7224
            </p>
          </div>
          <p className="text-[18px] font-semibold text-EBD/Success">
            08d 23h 15m 28s
          </p>
        </div>

        <div className="mt-5">
          <p className="font-medium text-md leading-6 text-EBD/Darkest">
            Bid Description
          </p>
          <div className="w-full py-2 px-4 border border-EBD/Light rounded-lg">
            <p>15 Pcs of the Apple M1 Pro 8-Core Chip</p>
          </div>
        </div>

        <div className="mt-5">
          <p className="font-medium text-md leading-6 text-EBD/Darkest">
            Item Description{" "}
            <span className="text-xs font-bold text-EBD/Medium">
              (Optional)
            </span>{" "}
          </p>
          <div className="w-full py-2 px-4 border border-EBD/Light rounded-lg">
            <p>
              The Apple M1 Pro 8-Core Chip. which provides the power and
              performance needed to handle your professional workflows. The
              14.2" Liquid Retina XDR display features a 3024 x 1964 resolution.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-md font-medium leading-6 text-EBD/Darkest">
            Sample Bid Image
          </p>
          <div className="w-full py-2 px-4 border border-EBD/Light rounded-lg flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <FileUploadSharpIcon />
              <p>Image_109837866_for_bid_NGA7224</p>
            </div>

            <button className="px-2 h-6 bg-[#B94B72] text-white rounded-[4px] text-xs">
              View file
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between items-center mt-5">
          <div className="w-[48%]">
            <p>Maximum Price (₦)</p>
            <div className="border border-EBD/Light w-full py-2 rounded-lg px-4">
              <p className="text-md leading-6 text-EBD/Darkest">₦9,000,000</p>
            </div>
          </div>
          <div className="w-[48%]">
            <p>Maximum Price (₦)</p>
            <div className="border border-EBD/Light w-full py-2 rounded-lg px-4">
              <p className="text-md leading-6 text-EBD/Darkest">01-08-2023</p>
            </div>
          </div>
        </div>

        <Button
          sx={{
            height: "48px",
            width: "34vw",
            borderRadius: "5px",
            mt: "32px",
            fontSize: "16px",
            fontWeight: 600,
            background: "#3E4095",
            color: "#ffffff",
            "&:hover": {
              background: "#3E4095",
            },
          }}
          disabled={true}
          className="disabled:!text-white disabled:opacity-50 disabled:!cursor-not-allowed"
        >
          Update Bid request details{" "}
        </Button>
      </div>

      <div className="w-[50%] ">
        <div className="w-full flex justify-between items-center">
          <p className="text-xl font-semibold leading-7 text-EBD/Darkest">
            Submitted Bids
          </p>
          <div className="flex justify-start items-center gap-3">
            <p>Sort</p>
            <div className="w-[108px] py-[5px] px-2 rounded-[4px] flex justify-between items-center border border-[#DAE8F2]">
              <p className="font-medium text-[#142633]">Last first</p>
              <ExpandMoreIcon />
            </div>
          </div>
        </div>
        <br />
        <Divider />

        <div className="h-[70vh] overflow-y-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_bid, index) => (
            <Bid key={index} setShowModal={setShowModal} />
          ))}
        </div>
      </div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <ViewBidModal />
      </Modal>
    </div>
  );
}
