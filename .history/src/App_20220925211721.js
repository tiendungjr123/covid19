import { useEffect, useState } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Sumary from "./components/Summary";
import { getCountries, getReportByCountry } from "./apis";
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries().then((res) => {
      console.log({ res });
      setCountries(res.data);
    });
  }, []);

  const handleOnChange = (e) => {
    const { Slug } = countries.find(
      (country) => country.ISO2.toLowerCase() === e.target.value
    );
    console.log({ Slug });

    getReportByCountry(Slug).then((res) =>
      console.log("getReportByCountry", { res })
    );
  };
  return (
    <>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} />
      <Highlight />
      <Sumary />
    </>
  );
}

export default App;
