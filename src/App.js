import React from "react";
import { Cards, Chart, CountrySelector, Navbar, Footer } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";


class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div>
        <Navbar />
        <div className={styles.container}>
          <CountrySelector handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
          <Cards data={data} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
