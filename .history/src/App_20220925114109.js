import { useEffect, useState } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Sumary from "./components/Summary";
import { getCountries } from "./apis";
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries().then((res) => {
      console.log({res});
      setCountries(res.data);
    });
  }, []);
  return (
    <>
      <CountrySelector countries={countries} />
      <Highlight />
      <Sumary />
    </>
  );
}

export default App;
