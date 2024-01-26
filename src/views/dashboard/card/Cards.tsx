import classNames from "classnames";
import { motion } from "framer-motion";
import Typography from "../../../components/typography";
import { DashboardCards } from "../../../helper/keyConstants";

const Cards = () => {
  const backgroundColors = [
    "rgba(52, 202, 165, 0.12)",
    "rgba(237, 84, 78, 0.12)",
    "rgba(237, 84, 78, 0.12)",
    "rgba(52, 202, 165, 0.12)",
  ];

  const colors = ["#34CAA5", "#ED544E", "#ED544E", "#34CAA5"];

  const variant = {
    hidden: { opacity: 0, x: 300 },
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

  const updatedCards = DashboardCards.map((card) => {
    switch (card.id) {
      case 1:
        return { ...card };

      default:
        return card;
    }
  });

  return (
    <motion.div
      variants={variant}
      animate="visible"
      initial="hidden"
      className="col-span-1"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[320px]">
        {updatedCards.map((el, i) => (
          <div
            className={classNames(
              `flex flex-col px-3 py-4 bg-white w-full cursor-pointer`,
              "rounded-xl border border-gray-100 space-y-3 ease-in-out shadow-sm"
            )}
            key={`dashboardCard${i}`}
          >
            <div className="flex items-center justify-between">
              <img src={el.image} alt="image" />
              <img src={el.graph} alt="image" />
            </div>

            <Typography type="p" className="text-[#898989] !text-lg">
              {el.title}
            </Typography>

            <Typography type="p" className="!text-lg " weight="medium">
              {el.amount}
            </Typography>

            <div className=" py-2 flex items-center justify-between">
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
              <div className="flex gap-2">
                <Typography
                  type="p"
                  className="text-[#606060]"
                  children="vs."
                />
                <Typography type="p" className="text-[#606060]">
                  {el.date}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Cards;
