import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length-1] : [];
  const summary = [
    { title: "Số ca nhiểm", count: data.Confirmed, type: "confirmed" },
    { title: "Khỏi", count: data.Active, type: "recovered" },
    { title: "Tử vong", count: data.Deaths, type: "deaths" },
  ];
  return (
    <Grid container spacing={2}>
      {summary.map((item) => (
        <Grid item sm={4} xs={12} key={item.title}>
          <HighlightCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
