class MyGasFeedAPI {
    constructor() {}
    getGasStations() {
        return [{
            name: 'Arco'
        },
        {
            name: 'Chevron'
        }];
    }
}

export default new MyGasFeedAPI();
