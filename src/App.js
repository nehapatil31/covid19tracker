import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";

import corona from "./assets/covid19.png";
import stopCorona from "./assets/stopCorona.jpg";

class App extends Component {
    state = {
        data: {},
        country: "",
    };

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    };

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={corona} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <img
                    className={styles.stopCorornaImg}
                    src={stopCorona}
                    alt="COVID-19"
                />
            </div>
        );
    }
}

export default App;
