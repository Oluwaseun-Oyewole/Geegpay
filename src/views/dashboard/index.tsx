import { Dropdown } from "antd";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import ChevronDownSolid from "../../assets/svg/dropdown.svg";
import Typography from "../../components/typography";
import { DashboardCards } from "../../helper/keyConstants";
import Chart from "./chart";
import { OrderTable } from "./order";
import Platform from "./platorm";
import "./style.css";

const Dashboard = () => {
  const backgroundColors = [
    "rgba(52, 202, 165, 0.12)",
    "rgba(237, 84, 78, 0.12)",
    "rgba(237, 84, 78, 0.12)",
    "rgba(52, 202, 165, 0.12)",
  ];

  const colors = ["#34CAA5", "#ED544E", "#ED544E", "#34CAA5"];
  const variant1 = {
    hidden: { opacity: 0, x: -500 },
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

  const variant2 = {
    hidden: { opacity: 0, x: 500 },
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

  const updatedCards = DashboardCards.map((card) => {
    switch (card.id) {
      case 1:
        return { ...card };

      default:
        return card;
    }
  });

  return (
    <div>
      <div className="grid_container my-5">
        <motion.div
          variants={variant1}
          animate="visible"
          initial="hidden"
          className="bg-white min-h-[320px] p-5 rounded-xl border-[1px] border-gray200"
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
                className="py-[8px] block px-[16px] bg-white w-full max-w-[321px] cursor-pointer text-[14px] rounded-full"
                overlayClassName="header-program-filter-dropdown"
                openClassName="rounded-b-none shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)]"
                menu={{
                  items: filters.map((filter, index) => {
                    return {
                      key: filter.label,
                      label: (
                        <div
                          style={{ fontFamily: "P" }}
                          className={`px-[18px] py-[14px] flex justify-between items-center font-poppins  ${
                            dateFilter === filter.label
                              ? "shadow-[0px_4px_25px_0px_rgba(29,78,216,0.05)]"
                              : ""
                          } 
                      ${index === filters.length - 1 ? "" : "border-b-[1px]"}
                    `}
                        >
                          <span className="text-sm">{filter.label}</span>
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
                  {dateFilter || <span className="text-[#dadada]">Select</span>}

                  <img src={ChevronDownSolid} alt="chev" className="w-4" />
                </button>
              </Dropdown>
            </div>
          </div>
          <div className="mt-5">
            <Chart />
          </div>
        </motion.div>
        <motion.div variants={variant2} animate="visible" initial="hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {updatedCards.map((el, i) => (
              <div
                className={classNames(
                  `flex flex-col px-3 py-4 bg-white w-full cursor-pointer transition duration-500 ease-in-out hover:scale-105 `,
                  "rounded-xl border border-gray-100 space-y-3 ease-in-out shadow-sm"
                )}
                key={`dashboardCard${i}`}
              >
                <div className="flex items-center justify-between">
                  <img src={el.image} alt="image" />
                  <img src={el.graph} alt="image" />
                </div>

                <Typography
                  type="p"
                  weight="medium"
                  className="text-[#898989] !text-lg"
                >
                  {el.title}
                </Typography>

                <Typography
                  type="p"
                  className="!text-lg "
                  title={el.amount?.toString()}
                  weight="semi-bold"
                >
                  {el.amount}
                </Typography>

                <div className="flex items-center justify-between">
                  <div
                    className="px-3 rounded-full py-1 flex items-center gap-1"
                    style={{
                      background: backgroundColors[i],
                      color: colors[i],
                    }}
                  >
                    <img src={el.arrow} alt="" />
                    <Typography type="p" className="lg:!text-[12px]">
                      {el.percentage}
                    </Typography>
                  </div>
                  <Typography type="p" className="" children="vs." />
                  <Typography type="p" className="text-[#606060]">
                    {el.date}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <OrderTable />

        <Platform />
      </div>
    </div>
  );
};

export default Dashboard;
