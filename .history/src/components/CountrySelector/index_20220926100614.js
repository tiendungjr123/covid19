import { FormControl, FormHelperText, InputLabel, NativeSelect } from "@material-ui/core";
import React from "react";

export default function CountrySelector({value, handleOnChange, countries}) {
  return (
    
      <FormControl>
        <InputLabel htmlFor="country-seletor" shrink>
          Quốc gia
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={handleOnChange}
          inputProps={{ name: "country", id: "country-seletor" }}
        >
          {countries.map((country) => (
            <option key={country.ISO2} value={country.ISO2.toLowerCase()}>
              {country.Country}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Lựa chọn quốc gia</FormHelperText>
      </FormControl>
  );
}