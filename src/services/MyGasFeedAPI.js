import axios from 'axios';

const BASE_URL = `http://devapi.mygasfeed.com`;

class MyGasFeedAPI {
    constructor() {}

    getNearbyGasStations(latitude, longitude) {
        // stations/radius/(Latitude)/(Longitude)/(distance)/(fuel type)/(sort by)/apikey.json?callback=?
        const url = `${BASE_URL}/stations/radius/${latitude}/${longitude}/10/reg/distance/rfej9napna.json`;
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then((response) => resolve(response.data))
                .catch((error) => {
                    console.log(error);
                    reject(error);
                })
        });
    }
}

export default new MyGasFeedAPI();
