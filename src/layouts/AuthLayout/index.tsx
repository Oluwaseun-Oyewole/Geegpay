import { Outlet } from "react-router-dom";
import Toggler from "../../components/toggle";
import { useTheme } from "../../context";

const AuthLayout = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`relative h-screen overflow-hidden ${
        isDarkMode ? "bg-black text-primary" : "bg-gray-50"
      }`}
    >
      <div className="absolute right-4 top-4">
        <Toggler />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
