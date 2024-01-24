import { CustomChart } from "../../components/chart";

const Chart = () => {
  const columnSeries = [
    {
      name: "Amount",
      data: [
        7.0, 18.0, 15.0, 28.0, 9.0, 45.0, 9.0, 17.0, 35.0, 40.0, 30.0, 22.0,
      ],
    },
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div>
      <CustomChart
        id="column-chart"
        type="bar"
        colors={["rgba(52,202,165,0.1)"]}
        series={columnSeries}
        stacked
        categories={months}
      />
    </div>
  );
};

export default Chart;
