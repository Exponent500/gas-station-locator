import React from 'react';
import { mount } from 'enzyme';

import GasStationList from '../GasStationList';
import GasStation from '../../GasStation/GasStation';

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

const DUMMY_STATIONS = [];

for (let i = 0; i < 12; i++) {
    let station = { ...DUMMY_STATION };
    station.address = `${i}${station.address}`;
    DUMMY_STATIONS.push(station);
}

const props = {
    stations: DUMMY_STATIONS
};

describe('GasStationList', () => {
    it('should exist', () => {
        wrapper = mount(<GasStationList { ...props }/>);
        expect(wrapper).toBeDefined();
    });

    describe('componentDidMount', () => {
        it('should set the totalPages', () => {
            wrapper = mount(<GasStationList { ...props }/>);
            expect(wrapper.state().totalPages).toEqual(2);
        });
    });

    describe('renderGasStations', () => {
        it('should render the correct # of gas stations', () => {
            wrapper = mount(<GasStationList { ...props }/>);
            expect(wrapper.find(GasStation).length).toBe(9);
        });
    });

    describe('renderPageSelectOptions', () => {
        it('should render the correct # of page select options', () => {
            wrapper = mount(<GasStationList { ...props }/>);
            const pageSelectOptions = wrapper.instance().renderPageSelectOptions();
            expect(pageSelectOptions.length).toBe(2);
        });
    });

    describe('handlePageSizeChange', () => {
        it('should update the total # of page select options', () => {
            wrapper = mount(<GasStationList { ...props }/>);
            wrapper.instance().handlePageSizeChange({ target: { value: 25 } });
            expect(wrapper.state().totalPages).toBe(1);
        });
    });
});