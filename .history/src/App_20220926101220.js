import { useEffect, useState } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Sumary from "./components/Summary";
import { getCountries, getReportByCountry } from "./apis";
import { sortBy } from "lodash";
import "@fontsource/roboto";
import moment from "moment";
import "moment/locale/vi";
import { Container, Typography } from "@material-ui/core";
moment.locale("vi");
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const countries = sortBy(res.data, "Country");
      setCountries(countries);

      setSelectedCountryId("vn");
    });
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );

      // call Api
      getReportByCountry(Slug).then((res) => {
        // xóa đi phần từ cuối của res.data
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);
  return (
    <Container>
      <Typography variant="h2" component="h2">
        Số liệu COVID-19
      </Typography>
      <Typography>{moment().format("LLL")}</Typography>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      />
      <Highlight report={report} />
      <Sumary report={report} selectedCountryId={selectedCountryId} />
    </Container>
  );
}

export default App;
