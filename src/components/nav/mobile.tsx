import { Tooltip } from "antd";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Box from "../../assets/svg/box.svg";
import Dashboard from "../../assets/svg/dash.svg";
import Forward from "../../assets/svg/forward.svg";
import Info from "../../assets/svg/info.svg";
import Logout from "../../assets/svg/logout.svg";
import Setting from "../../assets/svg/settings.svg";
import Spiral from "../../assets/svg/spiral.svg";
import User from "../../assets/svg/users.svg";
import { useTheme } from "../../context";
import { handleLogout } from "../../helper";
import { Routes } from "../../routes/routes";
import Button from "../button";
import Toggler from "../toggle";

export const Menu = () => {
  const { isDarkMode } = useTheme();
  return (
    <nav
      className={`overflow-x-hidden shadow-md lg:hidden h-screen pt-14 grid justify-between absolute right-0 top-0 w-[100px] items-center ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <ul>
        <li>
          {!isDarkMode ? (
            <NavLink to={Routes.dashboard}>
              <Button>
                <img src={Dashboard} alt="logo" />
              </Button>
            </NavLink>
          ) : (
            <NavLink to={Routes.dashboard}>
              <Button className="!mt-6">
                <RxDashboard color="white" size={20} />
              </Button>
            </NavLink>
          )}
        </li>
        <li>
          <Button>
            <img src={User} alt="user" />
          </Button>
        </li>
        <li>
          <Button>
            <img src={Box} alt="box" />
          </Button>
        </li>
        <li>
          <Button>
            <img src={Spiral} alt="spiral" />
          </Button>
        </li>
        <li>
          {" "}
          <Button>
            <img src={Info} alt="info" />
          </Button>
        </li>
        <li>
          <Toggler />
        </li>
      </ul>
      <ul className="grid self-end grid-rows-[max-content_max-content] pb-10">
        <li>
          <Button>
            <img src={Forward} alt="logo" />
          </Button>
        </li>

        <li>
          <Button>
            <img src={Setting} alt="logo" />
          </Button>
        </li>

        <li>
          <Button onClick={handleLogout}>
            <Tooltip title="logout">
              <img src={Logout} alt="logo" />
            </Tooltip>
          </Button>
        </li>
      </ul>
    </nav>
  );
};
