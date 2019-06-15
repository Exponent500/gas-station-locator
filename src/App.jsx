import React, { Component } from 'react';
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

  componentDidMount() {
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');
    }
    else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }
  }

  findStations = () => {
    // const { destinationInputValue } = this.state;
    // const gasStations = MyGasFeedAPI.getGasStations();
    // console.log(gasStations);
    // this.setState({ gasStations: gasStations });
  }

  findStationsNearMe = () => {
    const geoSuccess = (position) => {
      // hideNudgeBanner();
      // We have the location, don't display banner
      // clearTimeout(nudgeTimeoutId);
      MyGasFeedAPI.getNearbyGasStations(position.coords.latitude, position.coords.longitude)
        .then((data) => {
          this.setState({ gasStations: data.stations });
        })
        .catch((error) => {
          console.log(error);
        });
      // startPos = position;
      // document.getElementById('startLat').innerHTML = startPos.coords.latitude;
      // document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    };

    const geoError = (error) => {
      switch(error.code) {
        case error.TIMEOUT:
          // The user didn't accept the callout
          // showNudgeBanner();
          break;
      }
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }

  handleInputChange = (event) => {
    this.setState({ destinationInputValue: event.target.value });
  }

  renderGasStations() {
    const { gasStations } = this.state;

    return gasStations.map((gasStation) => {
      return <GasStation key={gasStation.address} station={gasStation}></GasStation>
    });
  }

  render() {
    const { destinationInputValue } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h2>Welcome to React</h2> */}
        </div>
        <div className="col-xs-12">
          <input value={destinationInputValue} onChange={this.handleInputChange} placeholder="Enter a location"></input>
          <button onClick={this.findStations}>Find a Station</button>
          <button onClick={this.findStationsNearMe}>Find Near Me</button>
        </div>
        {this.renderGasStations()}
      </div>
    );
  }
}

export default App;
