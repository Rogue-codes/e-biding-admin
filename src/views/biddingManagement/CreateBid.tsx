import { Button, FormControl, Modal, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import BidRequirement from "./BidRequirement";
import Category from "./Category";
import FileUploadSharpIcon from "@mui/icons-material/FileUploadSharp";
import { DatePicker } from "antd";
import AddRequirementModal from "./AddRequirementModal";
import { useEffect, useRef, useState } from "react";
import { enqueueSnackbar } from "notistack";

interface ICreateBid {
  bidId: string;
  bidDescription: string;
  itemDescription: string;
  starting_amount: number;
  startDate: any;
  endDate: any;
  requirements: string[];
  category: string[];
  img: any;
}
export default function CreateBid() {
  const [showModal, setShowModal] = useState(false);

  const [requirements, setRequirements] = useState<
    { id: string; text: string }[]
  >([]);
  const [category, setcategory] = useState<{ id: string; text: string }[]>([]);

  const handleAddRequirement = (
    type: string,
    requirement: { id: string; text: string }
  ) => {
    if (type === "category") {
      if (category.length === 3) {
        enqueueSnackbar(`Cannot add more than (3) categories`, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
        return;
      }
      setcategory([...category, requirement]);
    } else {
      setRequirements([...requirements, requirement]);
    }
  };

  const handleClearCategories = () => {
    setcategory([]);
  };

  const handleRemoveRequirement = (type: string, id: string) => {
    if (type === "category") {
      setcategory(category.filter((c) => c.id !== id));
    } else {
      setRequirements(requirements.filter((r) => r.id !== id));
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const imgRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const handleSelectImage = () => {
    if (imgRef.current && imgRef.current.files) {
      const file = imgRef.current.files[0];
      setValue("img", file);
    }
  };

  useEffect(()=>{
    setValue("requirements",requirements.map((req)=>req.text))
  },[requirements,setRequirements])


  useEffect(() => {
    setValue(
      "category",
      category.map((cat) => cat.text)
    );
  }, [category, setcategory]);

  const {
    control,
    formState: { isValid },
    handleSubmit,
    setValue,
    watch,
  } = useForm<ICreateBid>({
    mode: "onChange",
    defaultValues: {
      bidDescription: "",
      bidId: "",
      category: [],
      startDate: null,
      endDate: null,
      itemDescription: "",
      starting_amount: 0,
      requirements: [],
    },
  });

  const formValues = watch()

  const onSubmit = (data: ICreateBid) => {
    // Simulate API call
    console.log('data', data);
  };

  console.log('formValues', formValues);
  return (
    <div>
      <p className="font-semibold text-[18px] mb-12 leading-7 text-EBD/Darkest">
        Bid ID: NGA8110
      </p>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          sx={{
            width: "34vw",
          }}
        >
          <label
            htmlFor=""
            className="text-md font-medium leading-6 text-EBD/Darkest"
          >
            Bid description
          </label>
          <Controller
            name="bidDescription"
            control={control}
            rules={{
              required: "e.g Imaginary Company Limited",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "text/character not supported",
              },
            }}
            render={({ field: { ref, ...fields }, fieldState: { error } }) => (
              <TextField
                {...fields}
                variant="outlined"
                placeholder="e.g Imaginary Company Limited"
                inputProps={{ "data-testid": "firstname" }}
                fullWidth
                inputRef={ref}
                InputProps={{
                  color: fields.value && !error ? "success" : undefined,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                error={Boolean(error?.message)}
              />
            )}
          />
        </FormControl>

        <FormControl
          sx={{
            width: "34vw",
            display: "block",
            mt: "32px",
          }}
        >
          <label
            htmlFor=""
            className="text-md font-medium leading-6 text-EBD/Darkest"
          >
            Item Description (Optional)
          </label>
          <Controller
            name="itemDescription"
            control={control}
            rules={{
              required: "username is required",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "text/character not supported",
              },
            }}
            render={({ field: { ref, ...fields }, fieldState: { error } }) => (
              <TextField
                {...fields}
                variant="outlined"
                placeholder="e.g Imaginary Company Limited"
                inputProps={{ "data-testid": "firstname" }}
                fullWidth
                inputRef={ref}
                InputProps={{
                  color: fields.value && !error ? "success" : undefined,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </FormControl>

        <FormControl
          sx={{
            width: "34vw",
            display: "block",
            mt: "32px",
          }}
        >
          <label
            htmlFor=""
            className="text-md font-medium leading-6 text-EBD/Darkest"
          >
            Starting Amount (Optional)
          </label>
          <Controller
            name="starting_amount"
            control={control}
            rules={{
              required: "starting amount is required",
              pattern: {
                value: /^\d+$/,
                message: "text/character not supported",
              },
            }}
            render={({ field: { ref, ...fields }, fieldState: { error } }) => (
              <TextField
                {...fields}
                variant="outlined"
                placeholder="e.g 1000,000"
                inputProps={{ "data-testid": "firstname" }}
                fullWidth
                inputRef={ref}
                InputProps={{
                  color: fields.value && !error ? "success" : undefined,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </FormControl>

        <BidRequirement
          requirements={requirements}
          setShowModal={setShowModal}
          handleRemoveRequirement={handleRemoveRequirement}
        />
        <Category
          category={category}
          handleAddRequirement={handleAddRequirement}
          handleRemoveRequirement={handleRemoveRequirement}
          handleClearCategories={handleClearCategories}
        />

        <input
          ref={imgRef}
          onChange={handleSelectImage}
          type="file"
          name=""
          id=""
          className="hidden"
        />

        <div className="w-[34vw] mt-8 rounded-lg h-10 border border-EBD/Light py-2 px-4 flex justify-between items-centerrounded-lg">
          <div className="flex justify-start items-center gap-3">
            <FileUploadSharpIcon />
            <p>Upload Image</p>
          </div>

          <button
            className="px-2 h-6 bg-EBD-Primary text-white rounded-[4px] text-xs"
            onClick={handleFileChange}
          >
            Choose file
          </button>
        </div>

        <div className="flex mt-8 justify-between gap-5 items-center w-[34vw]">
          <div className="w-1/2">
            <label
              htmlFor=""
              className="text-md font-medium leading-6 text-EBD/Darkest"
            >
              Start Date
            </label>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  placeholder="Select Date"
                  className="border block w-full h-10"
                />
              )}
              rules={{
                required: "Date of birth is required",
              }}
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor=""
              className="text-md font-medium leading-6 text-EBD/Darkest"
            >
              End Date
            </label>
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  placeholder="Select Date"
                  className="border block w-full h-10"
                />
              )}
              rules={{
                required: "Date of birth is required",
              }}
            />
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
          disabled={!isValid}
          className="disabled:!text-white disabled:opacity-50 disabled:!cursor-not-allowed"
        >
          Create Bid request
        </Button>
      </form>

      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <AddRequirementModal
          handleAddRequirement={handleAddRequirement}
          handleClose={handleClose}
        />
      </Modal>
    </div>
  );
}
