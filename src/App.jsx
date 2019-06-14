import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GasStation from './components/GasStation/GasStation';
import MyGasFeedAPI from './services/MyGasFeedAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationInputValue: '',
      gasStations: []
    };

    this.findStations = this.findStations.bind(this);
    this.findStationsNearMe = this.findStationsNearMe.bind(this);
  }

  findStations = () => {
    const { destinationInputValue } = this.state;
    const gasStations = MyGasFeedAPI.getGasStations();
    console.log(gasStations);
    this.setState({ gasStations: gasStations });
  }

  findStationsNearMe = () => {
    // start process of obtaining geolocation
    // use gelocation value to query MyGasFeed API with correct lon / lat values
    // store gas stations retrieved within local state
  }

  handleInputChange = (event) => {
    this.setState({ destinationInputValue: event.target.value });
  }

  renderGasStations() {
    const { gasStations } = this.state;
    
    return gasStations.map((gasStation) => {
      return <GasStation key={gasStation.name}></GasStation>
    });
  }

  render() {
    const { destinationInputValue } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="col-xs-12">
          <input value={destinationInputValue} onChange={this.handleInputChange} placeholder="Enter a location"></input>
          <button onClick={this.findStations}>Find a Station</button>
          <button onClick={this.findStationNearMe}>Find Near Me</button>
        </div>
        {this.renderGasStations()}
      </div>
    );
  }
}

export default App;
