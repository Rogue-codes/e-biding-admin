import PrintSharpIcon from "@mui/icons-material/PrintSharp";
import { Divider } from "@mui/material";
export default function ViewBidModal() {
  return (
    <div className="w-[43vw] rounded-xl p-12 border bordre-black bg-white">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-xs font-bold text-EBD/Medium">Bid ID</p>
          <p className="text-xl leading-6 font-semibold text-EBD/Darkest mt-2">
            NGA7224
          </p>
        </div>

        <div className="w-[75px] rounded-[4px] h-6 cursor-pointer border border-EBD-Primary flex justify-center items-center gap-2">
          <PrintSharpIcon
            sx={{
              color: "#3E4095",
              fontSize: "12px",
            }}
          />
          <p className="text-xs text-EBD-Primary font-medium">Print</p>
        </div>
      </div>
      <br />
      <Divider
        sx={{
          background: "#DADBF2",
        }}
      />

      <div className="flex mt-6 justify-start items-start gap-12">
        <div>
          <p>Date Submitted:</p>
          <p className="mt-3 text-EBD/Darkest text-md font-medium">Company:</p>
          <p className="mt-3 text-EBD/Darkest text-md font-medium">
            Bid Amount:
          </p>
          <p className="mt-3 text-EBD/Darkest text-md font-medium">
            Quotation :
          </p>
          <p className="mt-10 text-EBD/Darkest text-md font-medium">
            Phone Number:
          </p>
          <p className="mt-[14.5px] text-EBD/Darkest text-md font-medium">Email:</p>
        </div>

        <div>
          <p>01-03-2024</p>
          <p className="mt-3 text-EBD/Darkest text-md">
            KENNY CONSTRUCTIONS LTD
          </p>
          <p className="mt-3 text-EBD/Darkest text-md">₦8,500,000</p>
          <div className="mt-3 text-EBD/Darkest text-md">
            <p className="text-sm text-EBD/Medium">
              Image_109837866_for_bid_NGA7224
            </p>
            <button className="px-2 h-6 mt-3 bg-[#B94B72] text-white rounded-[4px] text-xs">
              View file
            </button>
          </div>
          <p className="mt-3 text-EBD/Darkest text-md">O800XXXXXXX</p>
          <p className="mt-2 text-EBD/Darkest text-md">
            Emailsemails@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
