import { motion } from "framer-motion";
import Button from "../../../components/button";
import Typography from "../../../components/typography";
import { Platforms } from "../../../helper/keyConstants";

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

const Platform = () => {
  return (
    <motion.div variants={variant} animate="visible" initial="hidden">
      <div className="w-full bg-white rounded-lg px-5 h-[445px] overflow-scroll scroll-smooth ">
        <div className="py-2 flex items-center justify-between sticky left-0 top-0 bg-white">
          <Typography
            type="h1"
            variant="textXl"
            weight="medium"
            children="Top Platforms"
            className="!text-lg md:!text-xl"
          />
          <Button
            children="See All"
            className="!w-auto !justify-start text-[#34CAA5]"
          />
        </div>

        <div className="pt-2">
          {Platforms?.map((el, index) => {
            return (
              <div key={index}>
                <Typography
                  type="h3"
                  children={el.title}
                  weight="medium"
                  variant="textMd"
                  className="pb-3"
                />
                <div className="bg-[#F5F5F5] h-3 rounded-full w-full">
                  <span
                    className="block rounded-full h-3"
                    style={{ width: el.progress, background: el.color }}
                  ></span>
                </div>
                <div className="flex items-center justify-between pt-4 pb-5">
                  <Typography
                    type="p"
                    children={el.amount}
                    className="text-gray400 text-[17px]"
                  />
                  <Typography
                    type="p"
                    children={el.percentage}
                    className="text-gray400 text-[17px]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Platform;
