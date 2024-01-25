import { Outlet } from "react-router-dom";
import Navbar from "../../components/nav";
import Sidebar from "../../components/sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="grid w-full grid-flow-col grid-cols-[max-content_auto]">
        <Sidebar />
        <div className="bg-primary grid gap-4">
          <div className="bg-transparentGrey sticky left-0 top-0 z-50">
            <Navbar />
          </div>
          <div className="px-4 lg:px-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
