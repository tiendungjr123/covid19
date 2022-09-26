import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

export default function HighlightCard({ title, count }) {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            {title}
          </Typography>
          <Typography component="span" variant="body2">
            {count}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
