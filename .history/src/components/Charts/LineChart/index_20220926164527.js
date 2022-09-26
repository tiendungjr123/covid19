import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button, ButtonGroup } from "@material-ui/core";

const generateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format("DD/MM/YYYY"));

  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Tổng ca nhiễm",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "",
        data: data,
      },
    ],
  };
};
const LineChart = ({ data }) => {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState("all");
  const [state, setState] = useState("comfirmed");

  // useEffect(() => {
  //   let tmp = [];
  //   switch (state) {
  //     case "confirmed":
  //       tmp = data.map((item) => item.Confirmed);
  //       break;
  //     case "active":
  //       tmp = data.map((item) => item.Active);
  //       break;
  //     case "deaths":
  //       tmp = data.map((item) => item.Deaths);
  //       break;
  //     default:
  //       tmp = data.map((item) => item.Confirmed);
  //       break;
  //   }
  //   setOptions(generateOptions(tmp));
  // }, [data, state]);

  useEffect(() => {
    let customData = [];
    switch (reportType) {
      case "all":
        customData = data;
        break;
      case "30":
        customData = data.slice(Math.max(data.length - 30, 1));
        break;
      case "7":
        customData = data.slice(Math.max(data.length - 7, 1));
        break;

      default:
        customData = data;
        break;
    }

    setOptions(generateOptions(customData));
  }, [data, reportType]);
  return (
    <>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button
          color={state === "confirmed" ? "secondary" : ""}
          onClick={() => setState("confirmed")}
        >
          Số ca nhiễm
        </Button>
        <Button
          color={state === "active" ? "secondary" : ""}
          onClick={() => setState("active")}
        >
          Số ca khỏi
        </Button>
        <Button
          color={state === "deaths" ? "secondary" : ""}
          onClick={() => setState("deaths")}
        >
          Số ca tử vong
        </Button>
      </ButtonGroup>
      <ButtonGroup
        size="small"
        aria-label="small outlined button group"
        style={{
          float: "right",
        }}
      >
        <Button
          color={reportType === "all" ? "secondary" : ""}
          onClick={() => setReportType("all")}
        >
          Tất cả
        </Button>
        <Button
          color={reportType === "30" ? "secondary" : ""}
          onClick={() => setReportType("30")}
        >
          30 ngày
        </Button>
        <Button
          color={reportType === "7" ? "secondary" : ""}
          onClick={() => setReportType("7")}
        >
          7 ngày
        </Button>
      </ButtonGroup>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};
export default React.memo(LineChart);