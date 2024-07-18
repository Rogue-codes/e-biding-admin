import { Button, TextField } from "@mui/material";
import { useState } from "react";
import generateUniqueID from "../../utils/genRandomId";

interface IAddRequirementModal {
 handleAddRequirement: (type: string, requirement: {
    id: string;
    text: string;
}) => void;
  handleClose: () => void;
}
export default function AddRequirementModal({
  handleAddRequirement,
  handleClose,
}: IAddRequirementModal) {
  const [requirementText, setRequirementText] = useState("");
  return (
    <div className="w-[36vw] h-[19.4rem] rounded-lg p-10 bg-white">
      <p className="text-EBD/Darkest text-lg font-semibold leading-8">
        New Requirement
      </p>
      <div className="mt-5">
        <label
          htmlFor=""
          className="text-md font-medium leading-6 text-EBD/Darkest"
        >
          Requirement Description
        </label>
        <TextField
          variant="outlined"
          placeholder="Write Something"
          inputProps={{ "data-testid": "description" }}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            marginTop: "5px",
          }}
          value={requirementText}
          onChange={(e) => setRequirementText(e.target.value)}
        />
      </div>

      <div className="flex justify-between items-center gap-5 mt-5">
        <Button
          sx={{
            background: "transparent",
            color: "#3E4095",
            fontSize: "16px",
            fontWeight: 600,
            border: "1px solid #3E4095",
            height: "48px",
            mt: "8px",
            lineHeight: "24px",
            width: "13rem",
            "&:hover": {
              background: "transparent",
            },
          }}
          onClick={handleClose}
        >
          CANCEL
        </Button>
        <Button
          sx={{
            background: "#3E4095",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: 600,
            mt: "8px",
            lineHeight: "24px",
            width: "13rem",
            height: "48px",
            "&:hover": {
              background: "#3E4095",
            },
          }}
          onClick={() => {
            handleAddRequirement("requirement",{
              id: generateUniqueID(),
              text: requirementText,
            });
            setRequirementText("");
            handleClose();
          }}
        >
          ADD
        </Button>
      </div>
    </div>
  );
}
