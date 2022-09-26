import { FormControl, FormHelperText, InputLabel, NativeSelect, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles =  makeStyles((theme)=>({
  formControl:{
    margin: `${theme.spacing(3)}px 0`,
  }
}))
export default function CountrySelector({value, handleOnChange, countries}) {
  const styles = useStyles();
  return (
      <FormControl className={styles.formControl}>
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
