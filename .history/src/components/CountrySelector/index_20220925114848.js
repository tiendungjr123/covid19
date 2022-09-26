import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import React from "react";

export default function CountrySelector(value, handleOnChange, countries) {
  return (
    <>
    <div>
        {countries.map((country) =>(
          <p>{country.Country}</p>
        ))}
      </div>
      <FormControl>
        <InputLabel htmlFor="country-seletor" shrink>
          Quốc gia
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={handleOnChange}
          inputProps={{ name: "country", id: "country-seletor" }}
        >
          {/* {countries.map((country) => (
            <option value={country.IS02.toLowerCase()}>
              {country.Country}
            </option>
          ))} */}
        </NativeSelect>
      </FormControl>
      ;
    </>
  );
}
