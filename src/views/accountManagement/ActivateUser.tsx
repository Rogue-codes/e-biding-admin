import { Button, CircularProgress } from "@mui/material";
import {
  useApproveAccountMutation,
  useRejectAccountMutation,
} from "../../api/accounts.api";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";

interface IActivateUser {
  customer: string;
  id: number | null;
  setShowApprovalModal: React.Dispatch<React.SetStateAction<boolean>>;
  actionType: string | null;
}
export default function ActivateUser({
  customer,
  id,
  setShowApprovalModal,
  actionType,
}: IActivateUser) {
  const [approve, {data, isLoading, isSuccess }] = useApproveAccountMutation();
  const [reject, {data:rejectData, isLoading: rejectionLoading, isSuccess: RejectionSuccess }] =
    useRejectAccountMutation();

  useEffect(() => {
    if (isSuccess || RejectionSuccess) {
      setShowApprovalModal(false);
      enqueueSnackbar(data?.message || rejectData?.message, {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  }, [isSuccess, RejectionSuccess]);

  const handleApproveRejectUser = () => {
    actionType === "approve"
      ? approve({ id: id as number })
          .unwrap()
          .catch((e: any) => {
            console.log(e);
            enqueueSnackbar(e?.data?.message, {
              variant: "error",
              anchorOrigin: { vertical: "top", horizontal: "right" },
            });
          })
      : reject({ id: id as number })
          .unwrap()
          .catch((e: any) => {
            console.log(e);
            enqueueSnackbar(e?.data?.message, {
              variant: "error",
              anchorOrigin: { vertical: "top", horizontal: "right" },
            });
          });
  };
  return (
    <div className="w-[42.5vw] p-12 bg-white rounded-xl">
      <p>
        {actionType === "approve" ? "Approve" : "Reject"} the creation of{" "}
        {customer}
      </p>
      <div className="w-full flex justify-center items-center gap-5">
        <Button
          style={{
            background: "#3E4095",
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: "2rem",
            color: "#fff",
            fontWeight: 600,
          }}
          disabled={isLoading}
          className="disabled:opacity-50"
          onClick={handleApproveRejectUser}
        >
          {isLoading || rejectionLoading ? (
            <CircularProgress
              sx={{
                color: "white",
              }}
              size={15}
            />
          ) : (
            "Confirm"
          )}
        </Button>
        <Button
          style={{
            background: "transparent",
            border: "solid 1px #3E4095",
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: "2rem",
            color: "#3E4095",
            fontWeight: 600,
          }}
          disabled={isLoading || rejectionLoading}
          className="disabled:opacity-50"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
