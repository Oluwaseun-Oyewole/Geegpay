import { motion } from "framer-motion";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
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
import { Routes } from "../../routes/routes";
import Button from "../button";

export const Menu = () => {
  const { isDarkMode, toggleTheme } = useTheme();
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
          <div className="flex items-center justify-center">
            <motion.div
              layout
              className={`py-0 px-2 rounded-full ${
                isDarkMode ? "bg-primaryBlack" : "bg-white shadow-lg"
              }`}
              onClick={toggleTheme}
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
