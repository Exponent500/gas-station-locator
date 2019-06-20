import React from 'react';
import { mount } from 'enzyme';
import App, { GAS_STATION_REQUEST_STATUS } from './App';
import LocationIQAPI from './services/LocationIQAPI';
import GasStationList from './components/GasStationList/GasStationList';
import { NoResults, ErrorRetrievingStations, Loading } from './styles';

let mockGetCoordinatesPromise;

jest.mock('./services/LocationIQAPI', () => {
  return {
    getCoordinates: jest.fn(() => {
      return mockGetCoordinatesPromise;
    })
  };
});

let wrapper;

const EXPECTED_INITIAL_STATE = {
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

const DUMMY_INPUT = '455 5th Street, San Diego, CA 92122';

const DUMMY_COORDINATES = [{
  lat: -10,
  lon: 10
}];

const DUMMY_STATION = [{
  station: 'Chevron',
  address: '30 5th street',
  city: 'San Diego',
  region: 'California',
  zip: '92116',
  country: 'United States',
  distance: 0.1,
  reg_price: 1.00,
  mid_price: 1.00,
  pre_price: 1.00
}];

describe('App', () => {
  it('should initiliaze state', () => {
    let wrapper;
    wrapper = mount(<App />);
    expect(wrapper.instance().state).toMatchObject(EXPECTED_INITIAL_STATE);
  });

  describe('when user has entered text into the location input', () => {
    describe('and they click the Find button', () => {
      beforeEach(() => {
        wrapper = mount(<App />);
        wrapper.setState({ locationInputValue: DUMMY_INPUT });
      });

      it('should set gasStationRequestStatus to PENDING', () => {
        mockGetCoordinatesPromise = Promise.resolve({ result: DUMMY_COORDINATES });

        wrapper.instance().findStations();
        expect(wrapper.instance().state.gasStationRequestStatus).toEqual(GAS_STATION_REQUEST_STATUS.PENDING);
      });

      it('should set gasStations to an empty array', () => {
        mockGetCoordinatesPromise = Promise.resolve({ result: DUMMY_COORDINATES });

        wrapper.instance().findStations();
        expect(wrapper.instance().state.gasStations).toEqual([]);
      });

      it('should make a request to get the latitude and longitude values for the location entered', () => {
        mockGetCoordinatesPromise = Promise.resolve({ result: DUMMY_COORDINATES });

        wrapper.instance().findStations();
        expect(LocationIQAPI.getCoordinates).toHaveBeenCalledWith(DUMMY_INPUT);
      });
    });
  });

  describe('when user clicks on Near Me Button', () => {
    beforeEach(() => {
      wrapper = mount(<App />);
    });

    it('should set gasStationRequestStatus to PENDING', () => {
      wrapper.instance().findStations();
      expect(wrapper.instance().state.gasStationRequestStatus).toEqual(GAS_STATION_REQUEST_STATUS.PENDING);
    });

    it('should set gasStations to an empty array', () => {
      wrapper.instance().findStations();
      expect(wrapper.instance().state.gasStations).toEqual([]);
    });
  });

  describe('when there are gas stations to render', () => {
    it('should add them to the DOM', () => {
      wrapper = mount(<App />);
      wrapper.setState({ gasStations: DUMMY_STATION });
      expect(wrapper.find(GasStationList).exists()).toBe(true);
    });
  })

  describe('when there are no gas stations to render', () => {
    it('should show an appropriate message to the user', () => {
      wrapper = mount(<App />);
      wrapper.setState({ gasStations: [], gasStationRequestStatus: GAS_STATION_REQUEST_STATUS.SUCCESS });
      expect(wrapper.find(NoResults).exists()).toBe(true);
    });
  });

  describe('when there was an error retrieving gas stations', () => {
    it('should show an appropriate message to the user', () => {
      wrapper = mount(<App />);
      wrapper.setState({ gasStations: [], gasStationRequestStatus: GAS_STATION_REQUEST_STATUS.FAILED });
      expect(wrapper.find(ErrorRetrievingStations).exists()).toBe(true);
    });
  });

  describe('when a request to fetch gas stations is in process', () => {
    it('should show a loading indication', () => {
      wrapper = mount(<App />);
      wrapper.setState({ gasStationRequestStatus: GAS_STATION_REQUEST_STATUS.PENDING });
      expect(wrapper.find(Loading).exists()).toBe(true);
    });
  });
});
