import { Button, TextField } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import generateUniqueID from "../../utils/genRandomId";

interface ICategory {
  handleAddRequirement: (
    type: string,
    requirement: {
      id: string;
      text: string;
    }
  ) => void;
  category: {
    id: string;
    text: string;
  }[];
  handleRemoveRequirement: (type: string, id: string) => void;
  handleClearCategories: () => void;
}
export default function Category({
  handleAddRequirement,
  category,
  handleRemoveRequirement,
  handleClearCategories,
}: ICategory) {
  const [categoryText, setCategoryText] = useState("");

  return (
    <div className="w-[34vw] mt-6">
      <div className="relative">
        <label
          htmlFor=""
          className="text-md font-medium leading-6 text-EBD/Darkest"
        >
          Category
        </label>
        <TextField
          variant="outlined"
          placeholder="Select Category"
          inputProps={{ "data-testid": "firstname" }}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={categoryText}
          onChange={(e) => setCategoryText(e.target.value)}
        />
        <Button
          sx={{
            background: "#3E4095",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 600,
            "&:hover": {
              background: "#3E4095",
            },
            outline: "none",
            position: "absolute",
          }}
          className="px-3 h-8 right-2 top-9 rounded-lg absolute text-white bg-EBD-Primary font-semibold disabled:opacity-50 disabled:!text-white disabled:!cursor-not-allowed"
          onClick={() => {
            handleAddRequirement("category", {
              id: generateUniqueID(),
              text: categoryText,
            });
            setCategoryText("");
          }}
          disabled={!categoryText}
        >
          Add
        </Button>
      </div>
      <div className="flex mt-5 justify-start gap-1 items-start">
        <InfoIcon
          sx={{
            fontSize: "18px",
            background: "#fff",
          }}
        />
        <p className="text-[10px] font-medium text-EBD/Dark">
          You can only pick a maximum of 3 categories. The vendors under these
          categories will receive an email notification when a bid concerning
          them is created.
        </p>
      </div>

      <div className="flex justify-between mt-8 items-center w-full">
        <div className="flex justify-start items-center gap-2">
          {category.map((category) => (
            <div
              key={category.id}
              className="px-2 py-1 bg-[#F0F0FF] rounded-[4px] flex justify-between gap-5 items-center"
            >
              <p className="text-xs font-medium leading-4">{category.text}</p>
              <CloseIcon
                className="cursor-pointer"
                sx={{
                  fontSize: "14px",
                }}
                onClick={() => handleRemoveRequirement("category", category.id)}
              />
            </div>
          ))}
        </div>
        {category.length > 0 && (
          <p
            className="text-sm text-EBD/Medium leading-6 cursor-pointer font-semibold"
            onClick={handleClearCategories}
          >
            {" "}
            Clear selection
          </p>
        )}
      </div>
    </div>
  );
}
