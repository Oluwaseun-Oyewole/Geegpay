/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import Chart from "react-apexcharts";
import { useTheme } from "../../context";

type IBorder = "around" | "end";

type Props = {
  id: string | "bar-chart";
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | any | undefined;
  type?: "bar" | any;
  colors: Array<string>;
  className?: string;
  dropShadowColor?: string;
  strokeColor?: Array<string>;
  height?: number | string;
  width?: number | string;
  stacked?: boolean;
  plotOptions?: boolean;
  showGrid?: boolean;
  categories: Array<string> | undefined;
  borderRadiusApplication?: IBorder;
  filterBy?: string;
};

export const CustomChart: FC<Props> = ({
  type,
  colors,
  id,
  series,
  className,
  height,
  showGrid,
  categories,
  borderRadiusApplication = "end",
  filterBy,
}) => {
  const { isDarkMode } = useTheme();
  const yaxisOptions = {
    show: true,
    labels: {
      show: true,
      style: {
        colors: `${isDarkMode ? "#E5EAEF" : ""}`,
        fontSize: "13px",
        fontWeight: 300,
        fontFamily: "Plus Jakarta Sans",
      },
      formatter: (value: any) => {
        return type !== "line" && value > 0 ? `${value}.000` : `${value}`;
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  };

  const options = {
    chart: {
      id: id,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: categories || [],
      labels: {
        show: true,
        style: {
          colors: `${isDarkMode ? "#E5EAEF" : "#A3A3A3"}`,
          fontSize: "12px",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 400,
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },

      crosshairs: {
        show: true,
        width: 40,
        height: 10,
        top: 30,
        position: "front",
        opacity: 1,
        fill: {
          type: "gradient",
          color: "rgba(52,202,165,1)",

          gradient: {
            colorFrom: "rgba(52,202,165,1)",
            colorTo: "rgba(52,202,165,1)",
            stops: [0, 80, 100],
            opacityFrom: 1,
            opacityTo: 0.2,
          },
        },
      },
    },
    yaxis: yaxisOptions,

    fill: {
      colors: colors,
    },
    legend: {
      show: true,
      labels: {
        colors: "whitesmoke",
        fontFamily: "Poppins",
        backgroundColor: "green",
      },
    },

    grid: {
      show: showGrid ?? true,
      strokeDashArray: 5,
      borderColor: `${isDarkMode ? "black" : "#EAEAEA"}`,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        labels: {
          show: true,
          style: {
            colors: "#A7A7B0",
            fontSize: "13px",
            fontWeight: "600",
            fontFamily: "Plus Jakarta Sans, sans-serif",
          },
        },
      },
    },

    dataLabels: {
      enabled: false,
      formatter: function (val: number) {
        return val + ".00";
      },
      offsetY: -20,
      style: {
        colors: ["#304758"],
      },
    },

    tooltip: {
      enabled: true,
      shared: false,
      show: false,
      style: {
        fontSize: "12px",
        fontFamily: "Plus Jakarta Sans, sans-serif",
        background: "green",
      },
      x: {
        show: false,
      },
      y: {
        show: true,
        formatter: function (value: number) {
          return `$${value}`;
        },
      },

      marker: { show: false },
      theme: "dark",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: filterBy === "Weekly" ? 30 : 20,
        borderRadiusApplication: borderRadiusApplication,
        barHeight: "10%",
        colors: {
          backgroundBarColors: ["#34CAA5"],
          backgroundBarOpacity: 0.02,
          backgroundBarRadius: 20,
        },
        dataLabels: {
          position: "top",
        },
      },
    },
    responsive: [
      {
        breakpoint: 800,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: filterBy === "Weekly" ? 25 : 7,
              width: "10px",
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },

      {
        breakpoint: 500,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: filterBy === "Weekly" ? 10 : 7,
              width: "10px",
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 400,
        options: {
          plotOptions: {
            bar: {
              borderRadius: filterBy === "Weekly" ? 7 : 5,
            },
          },
        },
      },

      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 15,
            },
          },
        },
      },
    ],
  };

  return (
    <Chart
      options={options}
      series={series}
      type={type}
      height={height ?? 340}
      className={className}
    />
  );
};
