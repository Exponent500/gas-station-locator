import LocationIQAPI from '../LocationIQAPI';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const DUMMY_COORDINATES = {
    lat: -30,
    lon: 30
};

describe('LocationIQAPI', () => {
    describe('getCoordinates', () => {
        it('should return coordinates when request is successful', () => {
            const seachTerm = 'san diego';
            const mock = new MockAdapter(axios);
            const data = DUMMY_COORDINATES;
            mock.onGet(`https://us1.locationiq.com/v1/search.php?key=b3daa13b575165&q=${seachTerm}&limit=1&format=json`).reply(200, data);

            LocationIQAPI.getCoordinates('san diego')
                .then((response) => {
                    expect(response).toEqual(DUMMY_COORDINATES);
                });
        });

        it('should return an error when request fails', () => {
            const seachTerm = 'san diego';
            const mock = new MockAdapter(axios);
            const data = 'Error';
            mock.onGet(`https://us1.locationiq.com/v1/search.php?key=b3daa13b575165&q=${seachTerm}&limit=1&format=json`).reply(400, data);

            LocationIQAPI.getCoordinates('san diego')
                .catch((error) => {
                    expect(error).toEqual('Error');
                });
        });
    });
});