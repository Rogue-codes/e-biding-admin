import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div className="relative w-[45vw] -mt-5">
      <input
        type="text"
        className="w-full h-10 border border-[#DADBF2] rounded-lg focus:outline-none px-5"
      />
      <button className="w-[50px] absolute top-0 right-0 bg-EBD-Primary h-10 border border-[#DADBF2] rounded-tr-lg rounded-br-lg text-white font-semibold flex justify-center items-center">
        <SearchIcon />
      </button>
    </div>
  );
}
