/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import Chart from "react-apexcharts";

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
  xaxisLabel?: boolean;
  stacked?: boolean;
  plotOptions?: boolean;
  showGrid?: boolean;
  categories: Array<string>;
  borderRadiusApplication?: IBorder;
};

export const CustomChart: FC<Props> = ({
  type,
  colors,
  id,
  series,
  className,
  height,
  // xaxisLabel,
  showGrid,
  categories,
  borderRadiusApplication = "end",
}) => {
  const yaxisOptions = {
    show: true,
    labels: {
      show: true,
      style: {
        colors: "gray",
        fontSize: "13px",
        fontWeight: 300,
        fontFamily: "Plus Jakarta Sans",
      },
      formatter: (value: any) => {
        return type !== "line" && value > 0 ? `${value}.00` : `${value}`;
      },
      min: (num = 20) => {
        return num;
      },
      max: 200,
      tickAmount: 4,
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
          colors: "#A3A3A3",
          fontSize: "12px",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 500,
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
          type: "solid",
          color: "rgba(52,202,165,0.7)",

          gradient: {
            colorFrom: "rgba(52,202,165,0.1)",
            colorTo: "rgba(52,202,165,0.1)",
            stops: [0, 50],
            opacityFrom: 0.4,
            opacityTo: 0,
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
    },

    states: {
      normal: {
        filter: { type: "none", value: 0 },
      },
      hover: {
        filter: { type: "darken", value: 0.2 },
      },
      active: {
        filter: { type: "darken", value: 0.2 },
        allowMultipleDataPointsSelection: false,
      },
    },

    grid: {
      show: showGrid ?? true,
      strokeDashArray: 5,
      borderColor: "#EAEAEA",
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
      followCursor: true,
      intersect: true,
      inverseOrder: true,
      hideEmptySeries: true,
      fillSeriesColor: false,
      show: false,
      style: {
        fontSize: "12px",
        fontFamily: "Plus Jakarta Sans, sans-serif",
      },
      x: {
        show: false,
      },
      y: {
        show: true,
        formatter: undefined,
        title: {
          formatter: () => {
            return `Amount:$`;
          },
        },
      },

      marker: { show: false },
      theme: "dark",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 20,
        borderRadiusApplication: borderRadiusApplication,
        barHeight: "100%",
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
  };

  return (
    <Chart
      options={options}
      series={series}
      type={type}
      height={height ?? 250}
      className={className}
    />
  );
};
