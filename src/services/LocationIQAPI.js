import axios from 'axios';

// Would prefer to house these in a remote location (ala CAAS repo)
const BASE_URL = `https://us1.locationiq.com/v1/search.php`;
const API_KEY = `b3daa13b575165`;

class LocationIQAPI {
    getCoordinates(searchTerm) {
        // the "limit" query param is hard-coded to a value of 1 because we are only interested in the most relevant result
        const url = `${BASE_URL}?key=${API_KEY}&q=${searchTerm}&limit=1&format=json`;
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

export default new LocationIQAPI();
