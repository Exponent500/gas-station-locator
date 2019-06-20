import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import MyGasFeedAPI from '../MyGasFeedAPI';


const DUMMY_STATIONS = [{
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

describe('MyGasFeedAPI', () => {
    describe('getNearbyGasStations()', () => {
        it('should return stations when request is successful', () => {
            const mock = new MockAdapter(axios);
            const responseData = DUMMY_STATIONS;
            const latitude = -30;
            const longitude = 30;
            const searchRadius = 10;

            const BASE_PRODUCTION_URL = 'http://api.mygasfeed.com/';
            const PRODUCTION_API_KEY = '719oxpllmo';
            const url = `${BASE_PRODUCTION_URL}stations/radius/${latitude}/${longitude}/${searchRadius}/reg/distance/${PRODUCTION_API_KEY}.json`;

            mock.onGet(url).reply(200, responseData);
            MyGasFeedAPI.getNearbyGasStations(latitude, longitude, searchRadius)
                .then((response) => {
                    expect(response).toEqual(DUMMY_STATIONS);
                });
        });

        it('should return an error when request fails', () => {
            const mock = new MockAdapter(axios);
            const data = 'Error';
            const latitude = -30;
            const longitude = 30;
            const searchRadius = 10;

            const BASE_PRODUCTION_URL = 'http://api.mygasfeed.com/';
            const PRODUCTION_API_KEY = '719oxpllmo';
            const url = `${BASE_PRODUCTION_URL}stations/radius/${latitude}/${longitude}/${searchRadius}/reg/distance/${PRODUCTION_API_KEY}.json`;

            mock.onGet(url).reply(400, data);
            MyGasFeedAPI.getNearbyGasStations(latitude, longitude, searchRadius)
                .catch((response) => {
                    expect(response).toEqual('Error');
                });
        });
    });
});