import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/nav";
import Sidebar from "../../components/sidebar";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`grid w-full grid-flow-col lg:grid-cols-[max-content_auto] items-start`}
        onClick={() => isOpen && setIsOpen(false)}
      >
        <div className="hidden lg:block sticky left-0 top-0">
          <Sidebar />
        </div>

        <div className="bg-primary grid gap-4">
          <div className="bg-transparentGrey sticky left-0 top-0 z-50">
            <Navbar isOpen={isOpen} toggle={toggle} />
          </div>
          <div className="px-4 lg:px-6 relative">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
