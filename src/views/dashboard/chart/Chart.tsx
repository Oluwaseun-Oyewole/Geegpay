import { CustomChart } from "../../../components/chart";

type IFilter = {
  filter: string;
};
const Chart: React.FC<IFilter> = ({ filter }) => {
  const randomValue = Math.floor(Math.random() * 51);
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
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

  const columnSeries = (type: string) => {
    switch (type) {
      case "Weekly":
        return [
          {
            name: "Weekly Total",
            data: [5.0, 18.0, 15.0, 28.0, 7.0, 20.2, 10.5],
          },
        ];

      case "Yearly":
        return [
          {
            name: "Yearly Total",
            data: [
              5.0, 18.0, 15.0, 28.0, 7.0, 45.0, 40.0, 17.0, 35.0, 40.0, 30.0,
              22.0,
            ],
          },
        ];

      case "Monthly": {
        return [
          {
            name: "Monthly Total",
            data: [randomValue],
          },
        ];
      }

      default:
        break;
    }
  };

  const dateRenderer = (date: string | number) => {
    switch (date) {
      case "Weekly":
        return weekDays || undefined;

      case "Monthly":
        return months || undefined;

      case "Yearly":
        return months || undefined;

      default:
        break;
    }
  };

  return (
    <div>
      <CustomChart
        id="column-chart"
        type="bar"
        filterBy={filter}
        colors={["rgba(52,202,165,0.2)"]}
        series={columnSeries(filter)}
        stacked
        categories={dateRenderer(filter)}
      />
    </div>
  );
};

export default Chart;
