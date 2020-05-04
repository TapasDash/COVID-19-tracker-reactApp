import React, { Component } from "react";
import styles from "./App.module.css";
//module.css hepls us to madularize the css by giving it a name styles
//so that there won't be any mixup and confusion while using css files across the whole project
import coronaImage from "./images/image.png";
// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
//belw is short code for it

import { Cards, Chart, CountryPicker } from "./components";
//Its being made possible because of index.js file in components module

import { fetchData } from "./api";
//the reason we haven't written import { fetchData } from "./api/index"; coz
//for files named index we don't have to specify

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  //Called immediately after a component is mounted in DOM not virtual DOM
  //. Setting state here will trigger re-rendering.
  //we will set the data only if the component is beng mounted
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  //we'll pass this down as props to CountryPicker component
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    //fetch the data nd then
    //set the state
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
