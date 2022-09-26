import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import React from "react";

export default function CountrySelector(value, handleOnChange,countries) {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="country-seletor" shrink>
          Quốc gia
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={handleOnChange}
          inputProps={{ name: "country", id: "country-seletor" }}
        >
          {countries.map(({ Country, ISO2 }) => (
          <option key={ISO2} value={ISO2.toLowerCase()}>
            {Country}
          </option>
        ))}
        </NativeSelect>
      </FormControl>
      ;
    </>
  );
}
