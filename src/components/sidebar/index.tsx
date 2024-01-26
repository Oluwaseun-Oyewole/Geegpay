import { motion } from "framer-motion";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Box from "../../assets/svg/box.svg";
import Dashboard from "../../assets/svg/dash.svg";
import Forward from "../../assets/svg/forward.svg";
import Info from "../../assets/svg/info.svg";
import Logo from "../../assets/svg/logo.svg";
import Logout from "../../assets/svg/logout.svg";
import Setting from "../../assets/svg/settings.svg";
import Spiral from "../../assets/svg/spiral.svg";
import User from "../../assets/svg/users.svg";
import { useTheme } from "../../context";
import { Routes } from "../../routes/routes";
import Button from "../button";

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <aside
      className={`"sticky top-0 left-0 w-max h-screen ${
        isDarkMode
          ? "bg-primaryBlack border-gray-700"
          : "bg-primary border-gray200"
      } border-r-2 "`}
    >
      <nav className="grid h-full grid-rows-[max-content_max-content_auto]">
        <Button>
          <img src={Logo} alt="logo" className="mt-4" />
        </Button>

        <div>
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

          <div className="flex items-center justify-center">
            <motion.div
              layout
              className={`py-0 px-2 rounded-full ${
                isDarkMode ? "bg-primaryBlack" : "bg-white shadow-lg"
              }`}
              onClick={toggleTheme}
              transition={{ stiffness: 50 }}
            >
              <Button>
                <span
                  className={`!p-1 ${
                    isDarkMode && "bg-[#34CAA5]"
                  } rounded-full`}
                >
                  <MdLightMode
                    className={`${
                      isDarkMode ? "text-white" : "text-gray400"
                    }  text-2xl`}
                  />
                </span>
              </Button>
              <Button>
                <span
                  className={`!p-1 ${
                    !isDarkMode && "bg-[#34CAA5]"
                  } rounded-full`}
                >
                  <MdOutlineDarkMode
                    className={`${
                      isDarkMode ? "text-gray400" : "text-white"
                    } text-2xl`}
                  />
                </span>
              </Button>
            </motion.div>
          </div>
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
