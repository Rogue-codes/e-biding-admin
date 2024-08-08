import {
  Button,
  CircularProgress,
  FormControl,
  Modal,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import BidRequirement from "./BidRequirement";
import Category from "./Category";
import FileUploadSharpIcon from "@mui/icons-material/FileUploadSharp";
import { DatePicker } from "antd";
import AddRequirementModal from "./AddRequirementModal";
import { useEffect, useRef, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useGetAuctionIdQuery } from "../../api/auction.api";
import axios from "axios";
import Cookies from "js-cookie";

interface ICreateBid {
  bidId: string;
  bidDescription: string;
  itemDescription: string;
  startingAmount: number;
  endDate: any;
  bidRequirements: string[];
  categories: any;
  itemImg: any;
}
export default function CreateBid() {
  const [showModal, setShowModal] = useState(false);
  const [creatingAuction, setCreatingAuction] = useState(false);
  const [errorArr, setErrorArr] = useState<null | string[]>(null);

  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<ICreateBid>({
    mode: "onChange",
    defaultValues: {
      bidDescription: "",
      bidId: "",
      categories: [],
      endDate: null,
      itemDescription: "",
      startingAmount: 0,
      bidRequirements: [],
      itemImg: null,
    },
  });

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
      setValue("itemImg", file);
    }
  };

  const image = watch("itemImg");

  useEffect(() => {
    setValue(
      "bidRequirements",
      requirements.map((req) => req.text)
    );
  }, [requirements, setRequirements]);

  useEffect(() => {
    setValue(
      "categories",
      category.map((cat) => cat.text)
    );
  }, [category, setcategory]);

  const formVal = watch();

  const formData = new FormData();

  const categories = formVal.categories;
  const bidRequirements = formVal.bidRequirements;

  const date = new Date(formVal.endDate);

  formData.append("bidDescription", formVal.bidDescription);
  formData.append("bidId", formVal.bidId);
  // Append each category individually
  categories.forEach((category: any) => {
    formData.append("categories[]", category);
  });
  formData.append("endDate", date.toISOString());
  formData.append("itemDescription", formVal.itemDescription);
  formData.append("startingAmount", formVal.startingAmount.toString());
  bidRequirements.forEach((req: any) => {
    formData.append("bidRequirements[]", req);
  });
  formData.append("itemImg", formVal.itemImg);

  const handleCreateAuction = async (e: any) => {
    e.preventDefault();
    setCreatingAuction(true);

    const baseURL = import.meta.env.VITE_APP_API_URL + "";
    const token = Cookies.get("token");

    try {
      const response = await axios.post(`${baseURL}/auction/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setCreatingAuction(false);
      if (response?.data?.success) {
        enqueueSnackbar(response?.data?.message, {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      }
    } catch (error: any) {
      setCreatingAuction(false);
      console.log(error);
      setErrorArr(error?.response?.data?.message);
      if (Array.isArray(error?.response?.data?.message)) {
        errorArr?.forEach((item) => {
          enqueueSnackbar(item, {
            variant: "error",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          });
        });
      } else {
        enqueueSnackbar(error?.response?.data?.message, {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
      }
    }
  };

  const { data, isLoading, isSuccess } = useGetAuctionIdQuery({});

  useEffect(() => {
    if (isSuccess) {
      setValue("bidId", data?.data?.id);
    }
  }, [isSuccess]);

  // const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  //   setValue("endDate", dateString);
  // };
  return (
    <div>
      <p className="font-semibold text-[18px] mb-12 leading-7 text-EBD/Darkest">
        Bid ID:{" "}
        {isLoading ? (
          <CircularProgress
            sx={{
              color: "#3E4095",
            }}
            size={15}
          />
        ) : (
          data?.data?.id
        )}
      </p>

      <form action="" onSubmit={handleCreateAuction}>
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
              required: "description is required",
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
            name="startingAmount"
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
            <p>{!image ? "Upload Image" : image?.name}</p>
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
          type="submit"
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
          {creatingAuction ? (
            <CircularProgress
              sx={{
                color: "#3E4095",
              }}
              size={15}
            />
          ) : (
            "Create Bid request"
          )}
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
