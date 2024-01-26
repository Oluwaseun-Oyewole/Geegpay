import { motion } from "framer-motion";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "../../context";
import Button from "../button";

const Toggler = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
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
          <span className={`!p-1 ${isDarkMode && "bg-[#34CAA5]"} rounded-full`}>
            <MdLightMode
              className={`${
                isDarkMode ? "text-white" : "text-gray400"
              }  text-2xl`}
            />
          </span>
        </Button>
        <Button>
          <span
            className={`!p-1 ${!isDarkMode && "bg-[#34CAA5]"} rounded-full`}
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
  );
};

export default Toggler;
