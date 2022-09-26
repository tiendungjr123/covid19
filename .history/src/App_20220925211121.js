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


  const handleOnChange=(e) => {
    console.log({e});
  }
  return (
    <>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} />
      <Highlight />
      <Sumary />
      
    </>
  );
}

export default App;
