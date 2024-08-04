import SearchIcon from "@mui/icons-material/Search";

interface ISearch {
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  searchVal: string;
}
export default function Search({ searchVal, setSearchVal }: ISearch) {
  return (
    <div className="relative w-[45vw] -mt-5">
      <input
        type="text"
        className="w-full h-10 border border-[#DADBF2] rounded-lg focus:outline-none px-5"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button className="w-[50px] absolute top-0 right-0 bg-EBD-Primary h-10 border border-[#DADBF2] rounded-tr-lg rounded-br-lg text-white font-semibold flex justify-center items-center">
        <SearchIcon />
      </button>
    </div>
  );
}
