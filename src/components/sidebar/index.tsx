import { NavLink } from "react-router-dom";
import Theme from "../../assets/svg/Thame.svg";
import Box from "../../assets/svg/box.svg";
import Dashboard from "../../assets/svg/dash.svg";
import Forward from "../../assets/svg/forward.svg";
import Info from "../../assets/svg/info.svg";
import Logo from "../../assets/svg/logo.svg";
import Logout from "../../assets/svg/logout.svg";
import Setting from "../../assets/svg/settings.svg";
import Spiral from "../../assets/svg/spiral.svg";
import User from "../../assets/svg/users.svg";
import { Routes } from "../../routes/routes";
import Button from "../button";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 left-0 w-max h-screen bg-primary border-r-2 border-gray200">
      <nav className="grid h-full grid-rows-[max-content_max-content_auto]">
        <Button>
          <img src={Logo} alt="logo" className="mt-4" />
        </Button>

        <div>
          <NavLink to={Routes.dashboard}>
            <Button>
              <img src={Dashboard} alt="logo" />
            </Button>
          </NavLink>

          <Button>
            <img src={User} alt="user" />
          </Button>
          <Button>
            <img src={Box} alt="box" />
          </Button>
          <Button>
            <img src={Spiral} alt="spiral" />
          </Button>
          <Button>
            <img src={Info} alt="info" />
          </Button>

          <Button>
            <img src={Theme} alt="theme" />
          </Button>
        </div>

        <div className="grid self-end  grid-rows-[max-content_max-content] pb-10">
          <Button>
            <img src={Forward} alt="logo" />
          </Button>

          <Button>
            <img src={Setting} alt="logo" />
          </Button>

          <Button>
            <img src={Logout} alt="logo" />
          </Button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
