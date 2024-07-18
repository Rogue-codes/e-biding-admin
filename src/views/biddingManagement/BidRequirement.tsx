import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface IBidRequirement {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  requirements: {
    id: string;
    text: string;
  }[];
  handleRemoveRequirement: (type: string, id: string) => void;
}
export default function BidRequirement({ setShowModal,requirements, handleRemoveRequirement }: IBidRequirement) {
  return (
    <div className="w-[34vw] mt-6">
      <p className="text-md font-medium text-EBD/Darkest leading-6">
        Bid Requirements
      </p>
      <div className="flex mt-5 justify-start gap-1 items-start">
        <InfoIcon
          sx={{
            fontSize: "18px",
            background: "#fff",
          }}
        />
        <p className="text-[10px] font-medium text-EBD/Dark">
          Add Product-specific requirements for the product. A vendor must have
          to check the one(s) they can provide.
        </p>
      </div>

      <div>
        {requirements?.map((requirement) => (
          <div
            key={requirement.id}
            className="flex justify-between items-center h-8 py-5 my-3 border-b border-EBD/Light"
          >
            <p className="text-sm leading-6 text-[#142633]">
              {requirement.text}
            </p>
            <CloseIcon
              className="cursor-pointer"
              sx={{
                fontSize: "18px",
              }}
              onClick={() => handleRemoveRequirement("requirement",requirement.id)}
            />
          </div>
        ))}
      </div>

      <Button
        variant="contained"
        sx={{
          background: "#3E4095",
          color: "#ffffff",
          fontSize: "12px",
          fontWeight: 500,
          mt: "8px",
          textTransform: "capitalize",
          "&:hover": {
            background: "#3E4095",
          },
        }}
        onClick={() => setShowModal(true)}
      >
        <AddIcon /> Add new requirement
      </Button>
    </div>
  );
}
