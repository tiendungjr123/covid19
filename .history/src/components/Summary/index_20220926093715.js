import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HighMaps from "../Charts/HighMaps";
import LineChart from "../Charts/LineChart";

export default function Sumary({ report, selectedCountryId }) {
  const [mapData, setMapData] = useState({});
  useEffect(() => {
      import(
        '@highcharts/map-collection/countries/vn/vn-all.geo.json'
      ).then((res) => setMapData(res));
  }, []);
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
