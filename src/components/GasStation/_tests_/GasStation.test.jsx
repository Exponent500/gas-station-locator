import React from 'react';
import { mount } from 'enzyme';

import GasStation from '../GasStation';
import unbrandedStationImage from '../../../assets/images/unbranded-station.png';

let wrapper;

const DUMMY_STATION = {
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
};

const DUMMY_STATION_WITH_UNBRANDED_NAME = {
    station: 'Unbranded',
    address: '30 5th street',
    city: 'San Diego',
    region: 'California',
    zip: '92116',
    country: 'United States',
    distance: 0.1,
    reg_price: 1.00,
    mid_price: 1.00,
    pre_price: 1.00
};

const props = {
    station: DUMMY_STATION
};

const propsWithUnbrandedStation = {
    station: DUMMY_STATION_WITH_UNBRANDED_NAME
}

describe('GasStation', () => {
    it('should exist', () => {
        wrapper = mount(<GasStation { ...props } />);
        expect(wrapper).toBeDefined();
    });

    it('should render a LocationPin with a correct link', () => {
        wrapper = mount(<GasStation { ...props } />);
        const destinationAddress = `${DUMMY_STATION.address} ${DUMMY_STATION.city} ${DUMMY_STATION.region} ${DUMMY_STATION.zip}`;
        const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${destinationAddress}`;
        expect(wrapper.find(`a[href="${mapLink}"]`).exists()).toBe(true);
    });

    describe('renderLogo()', () => {
        it('should render an Image component with an Unbranded Logo', () => {
            wrapper = mount(<GasStation { ...propsWithUnbrandedStation } />);
            expect(wrapper.find(`img[src="${unbrandedStationImage}"]`).exists()).toBe(true);
        });

        it('should render an Image component with an Branded Logo', () => {
            wrapper = mount(<GasStation { ...props } />);
            expect(wrapper.find(`img[src="//logo.clearbit.com/${DUMMY_STATION.station}.com"]`).exists()).toBe(true);
        });
    });
});