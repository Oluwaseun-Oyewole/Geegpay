import ArrowDown from "../assets/svg/arrow-down.svg";
import ArrowUp from "../assets/svg/arrow-up.svg";
import Graph from "../assets/svg/graph.svg";
import Graph2 from "../assets/svg/graph2.svg";
import income from "../assets/svg/income.svg";
import Order from "../assets/svg/order.svg";
import Refund from "../assets/svg/refund.svg";
import Sales from "../assets/svg/sales.svg";

type PageTitle = {
  [key: string]: string;
};

export const PageTitle: PageTitle = {
  "/": "Dashboard",
  order: "Order",
};

export const DashboardCards = [
  {
    id: 1,
    title: "Total Order",
    amount: "$350",
    percentage: "23.5%",
    date: "previous month",
    image: Order,
    graph: Graph,
    arrow: ArrowUp,
  },
  {
    id: 2,
    title: "Total Refund",
    amount: "$270",
    percentage: "23.5%",
    date: "previous month",
    image: Refund,
    graph: Graph2,
    arrow: ArrowDown,
  },
  {
    id: 3,
    title: "Average Sales",
    percentage: "23.5%",
    date: "previous month",
    graph: Graph2,
    arrow: ArrowDown,
    image: Sales,
    amount: "$1567",
  },
  {
    id: 4,
    title: "Total Income",
    amount: "$350.000",
    percentage: "23.5%",
    date: "previous month",
    image: income,
    graph: Graph,
    arrow: ArrowUp,
  },
];

export const Platforms = [
  {
    title: "Book Bazaar",
    amount: "$2,500,000",
    progress: "60%",
    percentage: "+15%",
    color: "#6160DC",
  },
  {
    title: "Artisan Aisle",
    amount: "$1,800,000",
    progress: "40%",
    percentage: "+10%",
    color: "#54C5EB",
  },
  {
    title: "Toy Troop",
    amount: "$1,200,000",
    progress: "30%",
    percentage: "+8%",
    color: "#FFB74A",
  },
  {
    title: "XStore",
    amount: "$600,000",
    progress: "35%",
    percentage: "+15%",
    color: "#ED544E",
  },
  {
    title: "Artisan Aisle",
    amount: "$2,800,000",
    progress: "70%",
    percentage: "+25%",
    color: "#6160DC",
  },
  {
    title: "Toy Troop",
    amount: "$1,200,000",
    progress: "30%",
    percentage: "+20%",
    color: "#54C5EB",
  },
];
