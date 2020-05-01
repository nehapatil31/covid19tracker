import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
            console.log(await fetchCountries());
        };
        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                //className={classes.selectEmpty}
                // value={state.age}
                name="age"
                onChange={(e) => {
                    handleCountryChange(e.target.value);
                }}
                inputProps={{ "aria-label": "age" }}
            >
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => (
                    <option value={country} key={i}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;
