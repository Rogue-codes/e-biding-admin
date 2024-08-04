import { CircularProgress } from "@mui/material";
import { useGetAccountQuery } from "../../api/accounts.api";
import { user } from "../../assets";
import { ISingleAccount } from "../../interfaces/account.interface";

interface IAccountDetails {
  customer: ISingleAccount | undefined;
  isLoading:boolean;
}
export default function AccountDetails({customer, isLoading }: IAccountDetails) {
  return (
    <div className="w-[42.5vw] p-12 bg-white rounded-xl">
      {!isLoading ? (
        <div className="w-full h-full">
          <div className="w-[161px] h-[161px] flex justify-center items-center bg-[#DADBF2] rounded-full border mx-auto">
            <img src={user} alt="" />
          </div>

          <div className="">
            <div className="mt-3">
              <p className="text-sm leading-6 font-medium text-EBD/Darkest">
                Full Name
              </p>
              <p className="text-md leading-6 text-EBD/Darkest">
                {customer?.firstName} {customer?.lastName}
              </p>
            </div>

            <div className="mt-3">
              <p className="text-sm leading-6 font-medium text-EBD/Darkest">
                Company Name
              </p>
              <p className="text-md leading-6 text-EBD/Darkest">
                {customer?.companyName}
              </p>
            </div>

            <div className="mt-3">
              <p className="text-sm leading-6 font-medium text-EBD/Darkest">
                Company Address
              </p>
              <p className="text-md leading-6 text-EBD/Darkest">
                {customer?.companyAddress}.
              </p>
            </div>

            <div className="mt-3">
              <p className="text-sm leading-6 font-medium text-EBD/Darkest">
                Email Address
              </p>
              <p className="text-md leading-6 text-EBD/Darkest">
                {customer?.email}
              </p>
            </div>

            <div className="mt-3 flex justify-start items-center gap-8">
              <div>
                <p className="text-sm leading-6 font-medium text-EBD/Darkest">
                  Phone Number
                </p>
                <p className="text-md leading-6 text-EBD/Darkest">
                  {customer?.phone}
                </p>
              </div>
              <div>
                <p className="text-sm leading-6 font-medium text-EBD/Darkest">
                  Alternate Phone Number
                </p>
                <p className="text-md leading-6 text-EBD/Darkest">
                  {customer?.alternatePhone}
                </p>
              </div>
            </div>

            <div className="mt-3 flex justify-start items-center gap-8">
              <div>
                <p className="text-sm leading-6 font-medium text-EBD/Darkest">
                  RC Number
                </p>
                <p className="text-md leading-6 text-EBD/Darkest">
                  {customer?.RCNumber}
                </p>
              </div>
              <div>
                <p className="text-sm leading-6 font-medium text-EBD/Darkest">
                  Postal Code
                </p>
                <p className="text-md leading-6 text-EBD/Darkest">
                  {customer?.postalCode}
                </p>
              </div>
            </div>

            <div className="relative mt-3 w-full h-10 border border-EBD/Light rounded-lg flex justify-start items-center pl-4">
              <p>{customer?.companyName}_CAC Document_2023</p>
              <button className="w-[82px] h-[23px] rounded-[4px] top-2 bg-EBD-Primary text-white text-xs font-medium absolute right-5">
                <a
                  href={customer?.CACDoc}
                  target="_blank"
                  download="Wade_Engineering_CAC_Document_2023.pdf"
                >
                  Download
                </a>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress
            sx={{
              color: "#3E4095",
            }}
            size={55}
          />
        </div>
      )}
    </div>
  );
}
