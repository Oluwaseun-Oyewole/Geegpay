import type { TableProps } from "antd";
import { motion } from "framer-motion";
import Cooper from "../../../assets/svg/cooper.svg";
import Corey from "../../../assets/svg/corey.svg";
import Invoice from "../../../assets/svg/invoice.svg";
import Jay from "../../../assets/svg/jaden.svg";
import Marcus from "../../../assets/svg/marcus.svg";
import Philip from "../../../assets/svg/philip.svg";
import Button from "../../../components/button";
import GeegTable from "../../../components/table";
import Typography from "../../../components/typography";

type UserType = { name: string; img: string };
interface DataType {
  key: string;
  name: UserType;
  date: string;
  amount: string;
  status: string;
  invoice: string;
}

type IStatus = "paid" | "refund";

const renderStatus = (text: IStatus) => {
  let className;
  if (text === "paid") {
    return (className = "text-[#34CAA5]");
  } else if (text === "refund") {
    return (className = "text-[#ED544E]");
  }
  return className;
};
const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, el) => (
      <div className="flex items-center gap-2">
        {<img src={el.name.img} />}
        {el.name.name}
      </div>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (el) => <div className="text-[#737373]">{el}</div>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (el) => (
      <div className={`capitalize ${renderStatus(el)}`}>{el}</div>
    ),
  },
  {
    title: "Invoice",
    key: "invoice",
    dataIndex: "invoice",
    render: (_, el) => (
      <div className="flex gap-2 items-center">
        <img src={Invoice} alt="invoice" />
        {el.invoice}
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: { name: "Marcus Bergson", img: Marcus },
    date: "Nov 15, 2023",
    amount: "$80, 000",
    status: "paid",
    invoice: "View",
  },
  {
    key: "2",
    name: { name: "Jaydon Vaccaro", img: Jay },
    date: "Nov 15, 2023",
    amount: "$150, 000",
    status: "refund",
    invoice: "View",
  },
  {
    key: "3",
    name: { name: "Corey Schleifer", img: Corey },
    date: "Nov 14, 2023",
    amount: "$87, 000",
    status: "paid",
    invoice: "View",
  },
  {
    key: "4",
    name: { name: "Cooper Press", img: Cooper },
    date: "Nov 14, 2023",
    amount: "$100, 000",
    status: "refund",
    invoice: "View",
  },

  {
    key: "5",
    name: { name: "Philip Lubin", img: Philip },
    date: "Nov 13, 2023",
    amount: "$78, 000",
    status: "paid",
    invoice: "View",
  },
];

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

export const OrderTable = () => {
  return (
    <motion.div variants={variant} animate="visible" initial="hidden">
      <div className="w-full bg-white rounded-lg px-5">
        <div className="py-2 flex items-center justify-between sticky left-0 top-0 bg-white z-50">
          <Typography
            type="h1"
            variant="textXl"
            weight="medium"
            children="Last Orders"
          />
          <Button
            children="See All"
            className="!w-auto !justify-start text-[#34CAA5]"
          />
        </div>
        <GeegTable columns={columns} dataSource={data} pagination={false} />
      </div>
    </motion.div>
  );
};
