import { Dropdown } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import ChevronDownSolid from "../../../assets/svg/dropdown.svg";
import Typography from "../../../components/typography";
import { useTheme } from "../../../context";
import Chart from "./Chart";

const GeegCharts = () => {
  const { isDarkMode } = useTheme();
  const variant = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
        stiffness: 100,
      },
    },
  };

  const [dateFilter, setDateFilter] = useState<string | null>(null);
  const filters = [
    {
      label: "Weekly",
    },
    {
      label: "Monthly",
    },
    {
      label: "Yearly",
    },
  ];

  return (
    <motion.div
      variants={variant}
      animate="visible"
      initial="hidden"
      className={`${
        isDarkMode ? "bg-black border-gray-500" : "bg-white  border-gray200"
      } md:pt-4 pt-2 px-2 md:px-5 rounded-xl border-[1px]`}
    >
      <div className="grid grid-flow-col grid-cols-[max-content_max-content] justify-between">
        <Typography
          type="h1"
          variant="textXl"
          weight="medium"
          children="Sales Trends"
          className={`${isDarkMode && "text-gray200"} !text-lg md:!text-xl`}
        />

        <div className="grid grid-flow-col items-center grid-cols-[max-content_auto]">
          <Typography
            type="h1"
            variant="textSm"
            weight="medium"
            children="Sort by:"
            className={`${isDarkMode && "text-gray200"}`}
          />
          <Dropdown
            className={`py-[8px] block px-[16px] ${
              isDarkMode ? "bg-primaryBlack text-gray200" : "bg-white"
            } w-full max-w-[321px] cursor-pointer text-[14px] rounded-full !text-xs shadow-sm`}
            overlayClassName="header-program-filter-dropdown"
            openClassName="rounded-b-none shadow-sm"
            menu={{
              items: filters.map((filter, index) => {
                return {
                  key: filter.label,
                  label: (
                    <div
                      className={`${
                        isDarkMode
                          ? "bg-primaryBlack text-gray200 hover:text-[rgba(52,202,165,0.9)]"
                          : "hover:text-white hover:bg-[rgba(52,202,165,0.5)]"
                      } px-[18px] py-[14px] flex justify-between items-center ${
                        dateFilter === filter.label ? "shadow-md" : ""
                      } 
                ${index === filters.length - 1 ? "" : "border-b-[1px]"}
              `}
                    >
                      <span className="!text-xs">{filter.label}</span>
                    </div>
                  ),
                  className: "!p-0",
                  onClick: (ev) => {
                    setDateFilter(ev.key);
                  },
                };
              }),
              onSelect: (ev) => {
                setDateFilter(ev.selectedKeys[0]);
              },
            }}
            trigger={["click"]}
          >
            <button className="flex justify-between items-center text-[16px] gap-2">
              {dateFilter || <span className="">Select</span>}
              {isDarkMode ? (
                <IoMdArrowDropdown className="text-white text-lg" />
              ) : (
                <img src={ChevronDownSolid} alt="chev" className="w-4" />
              )}
            </button>
          </Dropdown>
        </div>
      </div>

      <div className="mt-2 lg:mt-5">
        <Chart filter={dateFilter ?? "Yearly"} />
      </div>
    </motion.div>
  );
};

export default GeegCharts;
