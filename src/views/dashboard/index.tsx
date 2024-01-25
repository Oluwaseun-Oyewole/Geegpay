import { motion, useScroll, useTransform } from "framer-motion";
import Cards from "./card/Cards";
import GeegCharts from "./chart";
import { OrderTable } from "./order/Order";
import Platform from "./platform/Platorm";
import "./style.css";

const Dashboard = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <div>
      <motion.div style={{ y }} className="grid_container pb-4 z-20">
        <GeegCharts />
        <Cards />
        <OrderTable />
        <Platform />
      </motion.div>
    </div>
  );
};

export default Dashboard;
