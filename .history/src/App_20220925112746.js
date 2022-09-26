import { useEffect } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Sumary from "./components/Summary";
import { getCountries } from "./apis";
function App() {

  useEffect(()=>{
    getCountries()
  },[])
  return (
    <>
      <CountrySelector/>
      <Highlight/>
      <Sumary/>
    </>
  );
}

export default App;
