import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HighMaps from "../Charts/HighMaps";
import LineChart from "../Charts/LineChart";

export default function Sumary({ report, selectedCountryId }) {
  const [mapData, setMapData] = useState({});
  useEffect(() => {
    if (selectedCountryId) {
      import(
        '@highcharts/map-collection/countries/vn'
      ).then((res) => setMapData(res));
    }
  }, [selectedCountryId]);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChart data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <HighMaps mapData={mapData}/>
        </Grid>
      </Grid>
    </div>
  );
}
