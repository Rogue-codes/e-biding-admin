import { useLocation, useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import { sideBarArr } from "../../constants";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import PollIcon from "@mui/icons-material/Poll";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="w-[20vw] px-5 border-r border-b-EBD/Light h-screen left-0 fixed">
      <div className="py-6">
        <img src={logo} alt="" />
      </div>

      <div>
        {sideBarArr.map((item, index) => (
          <div
            className={`${
              location.pathname === item.link
                ? "text-white bg-EBD-Primary"
                : "text-EBD/Medium"
            } px-5 py-3 rounded-md my-8 w-full cursor-pointer flex justify-start items-center gap-2`}
            onClick={() => navigate(`${item.link}`)}
            key={index}
          >
            {index === 0 ? (
              <AccountCircleIcon />
            ) : index === 1 ? (
              <ContentPasteSearchIcon />
            ) : (
              <PollIcon />
            )}
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className="px-5 flex cursor-pointer justify-start items-center gap-2">
        <LogoutIcon
          sx={{
            color: "#8787A8",
          }}
        />
        <p className="text-EBD/Medium">Logout</p>
      </div>
    </div>
  );
}
