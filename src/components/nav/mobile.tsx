import { NavLink } from "react-router-dom";
import Theme from "../../assets/svg/Thame.svg";
import Box from "../../assets/svg/box.svg";
import Dashboard from "../../assets/svg/dash.svg";
import Forward from "../../assets/svg/forward.svg";
import Info from "../../assets/svg/info.svg";
import Logout from "../../assets/svg/logout.svg";
import Setting from "../../assets/svg/settings.svg";
import Spiral from "../../assets/svg/spiral.svg";
import User from "../../assets/svg/users.svg";
import { Routes } from "../../routes/routes";
import Button from "../button";

export const Menu = () => {
  return (
    <nav
      className={`shadow-md lg:hidden h-screen pt-14 grid justify-center absolute right-0 top-0 w-[150px] items-center menu bg-white`}
    >
      <ul>
        <li>
          <NavLink to={Routes.dashboard}>
            <Button>
              <img src={Dashboard} alt="logo" />
            </Button>
          </NavLink>
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
          {" "}
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
          <Button>
            <img src={Theme} alt="theme" />
          </Button>
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
          <Button>
            <img src={Logout} alt="logo" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};
