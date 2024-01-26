import Cards from "./card/Cards";
import GeegCharts from "./chart";
import { OrderTable } from "./order/Order";
import Platform from "./platform/Platorm";
import "./style.css";

const Dashboard = () => {
  return (
    <div className="grid_container pb-4">
      <GeegCharts />
      <Cards />
      <OrderTable />
      <Platform />
    </div>
  );
};

export default Dashboard;
