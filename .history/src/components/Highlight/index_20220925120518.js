import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

export default function Highlight() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              Số ca mắc
            </Typography>
            <Typography component="span" variant="body2">
              3000
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              Số ca khỏi
            </Typography>
            <Typography component="span" variant="body2">
              100
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component="p" variant="body2">
              Số tử vong
            </Typography>
            <Typography component="span" variant="body2">
              200
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
