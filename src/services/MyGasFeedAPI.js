import axios from 'axios';

// Would prefer to house these in a remote location (ala CAAS repo)
const BASE_PRODUCTION_URL = 'http://api.mygasfeed.com/';
const PRODUCTION_API_KEY = '719oxpllmo';

class MyGasFeedAPI {
    getNearbyGasStations(latitude, longitude, searchRadius) {
        // hard-coding the distance to search to be in a 10 mile radius
        const url = `${BASE_PRODUCTION_URL}stations/radius/${latitude}/${longitude}/${searchRadius}/reg/distance/${PRODUCTION_API_KEY}.json`;
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
