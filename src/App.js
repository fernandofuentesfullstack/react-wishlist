import React, { Component } from "react";
import "./App.css";
import DataList from "./DataList";

class App extends Component {
  state = {
    deaths: null,
    confirmed: null,
    recovered: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://enrichman.github.io/covid19/world/full.json"
      );
      const data = await response.json();
      this.setState({
        deaths: data.deaths,
        confirmed: data.confirmed,
        recovered: data.recovered,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    if (this.state.loading) {
      return <div>Cargando los datos de hoy...</div>;
    }
    return (
      <>
        <DataList
          confirmed={this.state.deaths}
          deaths={this.state.confirmed}
          recovered={this.state.recovered}
        />
        
      </>
    );
  }
}

export default App;
