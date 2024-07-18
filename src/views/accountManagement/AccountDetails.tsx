import { user } from "../../assets";

export default function AccountDetails() {
  return (
    <div className="w-[42.5vw] p-12 bg-white rounded-xl">
      <div className="w-[161px] h-[161px] flex justify-center items-center bg-[#DADBF2] rounded-full border mx-auto">
        <img src={user} alt="" />
      </div>

      <div className="">
        <div className="mt-3">
          <p className="text-sm leading-6 font-medium text-EBD/Darkest">
            Full Name
          </p>
          <p className="text-md leading-6 text-EBD/Darkest">Wale Adigun</p>
        </div>

        <div className="mt-3">
          <p className="text-sm leading-6 font-medium text-EBD/Darkest">
            Company Name
          </p>
          <p className="text-md leading-6 text-EBD/Darkest">WADE ENGINEERING</p>
        </div>

        <div className="mt-3">
          <p className="text-sm leading-6 font-medium text-EBD/Darkest">
            Company Address
          </p>
          <p className="text-md leading-6 text-EBD/Darkest">
            54 Psychiatric Avenue, Iyana-Ipaja, Berger, Lagos.
          </p>
        </div>

        <div className="mt-3">
          <p className="text-sm leading-6 font-medium text-EBD/Darkest">
            Email Address
          </p>
          <p className="text-md leading-6 text-EBD/Darkest">
            wale@wadeengineering.com
          </p>
        </div>

        <div className="mt-3 flex justify-start items-center gap-8">
          <div>
            <p className="text-sm leading-6 font-medium text-EBD/Darkest">
              Phone Number
            </p>
            <p className="text-md leading-6 text-EBD/Darkest">08123456789</p>
          </div>
          <div>
            <p className="text-sm leading-6 font-medium text-EBD/Darkest">
              Alternate Phone Number
            </p>
            <p className="text-md leading-6 text-EBD/Darkest">090 1234 5678</p>
          </div>
        </div>

        <div className="mt-3 flex justify-start items-center gap-8">
          <div>
            <p className="text-sm leading-6 font-medium text-EBD/Darkest">
              RC Number
            </p>
            <p className="text-md leading-6 text-EBD/Darkest">RC/BN 000001</p>
          </div>
          <div>
            <p className="text-sm leading-6 font-medium text-EBD/Darkest">
              Postal Code
            </p>
            <p className="text-md leading-6 text-EBD/Darkest">500000</p>
          </div>
        </div>

        <div className="relative mt-3 w-full h-10 border border-EBD/Light rounded-lg flex justify-start items-center pl-4">
          <p>Wade Engineering_CAC Document_2023.Pdf</p>
          <button className="w-[82px] h-[23px] rounded-[4px] top-2 bg-EBD-Primary text-white text-xs font-medium absolute right-5">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
