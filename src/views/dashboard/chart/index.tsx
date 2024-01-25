import { Dropdown } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import ChevronDownSolid from "../../../assets/svg/dropdown.svg";
import Typography from "../../../components/typography";
import Chart from "./Chart";

const GeegCharts = () => {
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
      className="bg-white pt-4 px-5 rounded-xl border-[1px] border-gray200"
    >
      <div className="flex items-center justify-between">
        <Typography
          type="h1"
          variant="textXl"
          weight="medium"
          children="Sales Trends"
        />

        <div className="grid grid-flow-col items-center grid-cols-[max-content_auto]">
          <Typography
            type="h1"
            variant="textSm"
            weight="medium"
            children="Sort by:"
          />
          <Dropdown
            className="py-[8px] block px-[16px] bg-white w-full max-w-[321px] cursor-pointer text-[14px] rounded-full !text-xs shadow-sm"
            overlayClassName="header-program-filter-dropdown"
            openClassName="rounded-b-none shadow-sm"
            menu={{
              items: filters.map((filter, index) => {
                return {
                  key: filter.label,
                  label: (
                    <div
                      className={`px-[18px] py-[14px] flex justify-between items-center hover:text-white hover:bg-[rgba(52,202,165,0.5)]  ${
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
              <img src={ChevronDownSolid} alt="chev" className="w-4" />
            </button>
          </Dropdown>
        </div>
      </div>
      <div className="mt-5">
        <Chart />
      </div>
    </motion.div>
  );
};

export default GeegCharts;
