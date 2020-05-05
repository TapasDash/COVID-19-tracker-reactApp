import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

//fucntional component
//we'll detstuct handleCountryChange from this.props.handleCountryChange i.e from props OBJ
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  //we are putting fetchedCountries in an empty array as country names
  //are of similar data type i.e string

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
      //setFetchedCountries is responsible for updating the state..hence updating the component
      //thats why we passed setFetchedCountries in the array so that fetchCountries will run
      //only when the distinct country will be updated to the state
    };
    fetchAPI();
  }, [setFetchedCountries]); //setFetchedCountries in the array means fetchCountries() will run
  //only when there would be change in the setFetchedCountries i.e countries names i.e distinct country names
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => handleCountryChange(event.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
        {/* it is a rule that we also have to provide a key whenever we are
        mapping over something in react components */}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
