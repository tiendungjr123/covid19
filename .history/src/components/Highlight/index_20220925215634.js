import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";

export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    { title: "Số ca nhiểm", count: data.Confirmed, type: "confirmed" },
    { title: "Khỏi", count: data.Recovered, type: "recovered" },
    { title: "Tử vong", count: data.Deaths, type: "deaths" },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item sm={4} xs={12}>
        {summary.map((item) => (
          <HighlightCard
            title={item.title}
            count={item.count}
            type={item.type}
          />
        ))}
      </Grid>
    </Grid>
  );
}
