import React, { Component } from 'react';
import {
  AppWrapper,
  AppHeader,
  ContentWrapper,
  LocationInput,
  RadiusSelect,
  FindStationButton,
  FindStationNearMeButton,
  GasStationSearchBar,
  HeaderLogo,
  HeaderTitle
} from './styles'
import appLogo from './assets/images/AppLogo.png';
import GasStation from './components/GasStation/GasStation';
import MyGasFeedAPI from './services/MyGasFeedAPI';
import LocationIQAPI from './services/LocationIQAPI';

const GAS_STATION_REQUEST_STATUS ={
  NOT_SENT: 'NOT_SENT',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInputValue: '',
      searchRadiusOptions: [{
        value: 1,
        name: '1 mi'
      },
      {
        value: 5,
        name: '5 mi'
      },
      {
        value: 10,
        name: '10 mi'
      }
    ],
      searchRadiusInMiles: 1,
      gasStations: null,
      gasStationRequestStatus: GAS_STATION_REQUEST_STATUS.NOT_SENT
    };

    this.findStations = this.findStations.bind(this);
    this.findStationsNearMe = this.findStationsNearMe.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');
    }
    // CanIUse shows support on all browsers so this condition should not be hit.
    else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }
  }

  findStations = () => {
    const { locationInputValue, searchRadiusInMiles } = this.state;

    this.setState({ gasStations: [], gasStationRequestStatus: GAS_STATION_REQUEST_STATUS.PENDING });

    LocationIQAPI.getCoordinates(locationInputValue)
      .then((result) => MyGasFeedAPI.getNearbyGasStations(result[0].lat, result[0].lon, searchRadiusInMiles))
      .then((result) => this.setState({ gasStations: result.stations, gasStationRequestStatus: GAS_STATION_REQUEST_STATUS.SUCCESS }))
      .catch(() => this.setState({ gasStations: [], gasStationRequestStatus: GAS_STATION_REQUEST_STATUS.FAILED }))
  }

  findStationsNearMe = () => {
    const { searchRadiusInMiles } = this.state;

    this.setState({ gasStations: [], gasStationRequestStatus: GAS_STATION_REQUEST_STATUS.PENDING });

    const geoSuccess = (position) => {
      MyGasFeedAPI.getNearbyGasStations(position.coords.latitude, position.coords.longitude, searchRadiusInMiles)
        .then((data) => this.setState({ gasStations: data.stations, gasStationRequestStatus: GAS_STATION_REQUEST_STATUS.SUCCESS }))
        .catch(() => this.setState({ gasStations: [], gasStationRequestStatus: GAS_STATION_REQUEST_STATUS.FAILED }))
    };

    const geoError = (error) => {
      console.log(error);
      switch(error.code) {
        case error.PERMISSION_DENIED:
          // geolocation can be denied in a few conidition: 1) user denied, 2) denied due to not serving site over https.
          console.log(`Denied geolocation for the following reason: ${error.message}`);
          break;
        case error.POSITION_UNAVAILABLE:
          console.log('Position Unavailable');
          break;
        case error.TIMEOUT:
          console.log('Geolocation timed out');
          break;
      }
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }

  handleInputChange = (event) => {
    this.setState({ locationInputValue: event.target.value });
  }

  handleSelectChange = (event) => {
    this.setState({ searchRadiusInMiles: event.target.value });
  }

  renderGasStations() {
    const { gasStations, gasStationRequestStatus } = this.state;

    if (gasStations && gasStations.length === 0 && gasStationRequestStatus === GAS_STATION_REQUEST_STATUS.SUCCESS) {
      //TODO: Show something better looking than a plain div with no styling.
      return <div>No results found!</div>
    } else if (gasStations && gasStations.length) {
      return gasStations.map((gasStation) => {
        return <GasStation key={gasStation.address} station={gasStation}></GasStation>
      });
    } else if (gasStations && gasStations.length === 0 && gasStationRequestStatus === GAS_STATION_REQUEST_STATUS.FAILED) {
      //TODO: Show something better looking than a plain div with no styling.
      return <div>Error retrieving gas stations</div>
    }
  }

  renderLoadingSpinner() {
    const { gasStationRequestStatus } = this.state;
    if (gasStationRequestStatus === GAS_STATION_REQUEST_STATUS.PENDING) {
      //TODO: show a spinner instead
      return <div>Loading...</div>;
    } else {
      return null;
    }
  }

  render() {
    const { locationInputValue, gasStationRequestStatus, searchRadiusOptions } = this.state;
    const pendingRequest = gasStationRequestStatus === GAS_STATION_REQUEST_STATUS.PENDING;
    const disableFindStationButton = locationInputValue.length <= 10;
    return (
      <AppWrapper>
        <AppHeader>
          <HeaderLogo src={appLogo}/>
          <HeaderTitle>Fill 'Er Up!</HeaderTitle>
        </AppHeader>
        <ContentWrapper className="col-xs-12">
          <GasStationSearchBar className="col-md-8 offset-md-2">
            <div className="input-group">
              <LocationInput
                className="form-control"
                disabled={pendingRequest}
                value={locationInputValue}
                onChange={this.handleInputChange}
                placeholder="Enter a location">
              </LocationInput>
              <div className="input-group-append">
                <RadiusSelect
                  className="form-control"
                  disabled={pendingRequest}
                  onChange={this.handleSelectChange}>
                    {searchRadiusOptions.map((option, i) => {
                      return <option key={i} value={option.value}>{option.name}</option>
                    })}
                </RadiusSelect>
                <FindStationButton
                  className="btn btn-primary"
                  disabled={pendingRequest || disableFindStationButton}
                  onClick={this.findStations}>
                  Find
                </FindStationButton>
                <FindStationNearMeButton
                  className="btn btn-primary"
                  disabled={pendingRequest}
                  onClick={this.findStationsNearMe}>
                    Near Me
                </FindStationNearMeButton>
              </div>
            </div>
          </GasStationSearchBar>
          {this.renderLoadingSpinner()}
          {this.renderGasStations()}
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

export default App;
