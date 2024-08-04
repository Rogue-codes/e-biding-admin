import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { IAdmin } from "../../interfaces/admin.interface";

export default function Nav() {
  const location = useLocation();

  const admin:IAdmin = useSelector((state: any) => state.auth.admin);

  console.log("admin", admin);

  const getPathName = () => {
    switch (location.pathname) {
      case "/bidding-management":
        return <h1>Bidding Management</h1>;
      case "/analytics":
        return <h1>Reports & Analytics</h1>;
      case "/account-management":
        return <h1>Account Management</h1>;
      case "/bidding-management/create-bid":
        return <h1>Create Bid Request</h1>;
      default:
        return <h1>Bidding Management</h1>;
    }
  };

  const navigate = useNavigate();

  return (
    <nav className="w-[calc(100vw-20vw)] fixed z-[999] bg-white ml-[20vw] flex justify-between items-center px-6 pt-5 py-2">
      <div className="text-xl flex justify-start items-center gap-12 font-semibold text-EBD/Darkest">
        {getPathName()}

        {location.pathname === "/bidding-management/create-bid" ||
          (location.pathname.startsWith("/bidding-management/view-bid/") && (
            <button
              className="w-[135px] text-sm leading-6 font-medium text-EBD-Primary rounded-[4px] border border-EBD-Primary"
              onClick={() => navigate(-1)}
            >
              Back to Main page
            </button>
          ))}
      </div>
      <div className="w-[12rem] rounded-lg h-10 border border-b-EBD/Light flex justify-between items-center px-2">
        <div className="w-6 h-6 rounded-full border border-black"></div>
        <p className="text-md text-EBD/Dark font-medium">{admin.username}</p>
        <ExpandMoreIcon />
      </div>
    </nav>
  );
}
