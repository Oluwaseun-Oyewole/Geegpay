import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/nav";
import Sidebar from "../../components/sidebar";
import { useTheme } from "../../context";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`grid w-full grid-flow-col lg:grid-cols-[max-content_auto] items-start `}
      >
        <div className="hidden lg:block sticky left-0 top-0">
          <Sidebar />
        </div>

        <div
          className={` grid gap-4 ${
            isDarkMode ? "bg-primaryBlack" : "bg-primary"
          }`}
        >
          <div
            className={`${
              isDarkMode ? "bg-primaryBlack" : "bg-transparentGrey"
            } sticky left-0 top-0 z-50`}
          >
            <Navbar isOpen={isOpen} toggle={toggle} />
          </div>
          <div
            className="px-4 lg:px-6 relative"
            onClick={() => isOpen && setIsOpen(false)}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
