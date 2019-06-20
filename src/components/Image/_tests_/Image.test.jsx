import React from 'react';
import { mount } from 'enzyme';
import Image from '../Image';
import unbrandedStationImage from '../../../assets/images/unbranded-station.png';

let wrapper;

const propsWithGoodImageSrc = {
    src: unbrandedStationImage,
};

describe('Image', () => {
    describe('when given a valid src value', () => {
        it('should render an img element with said src value', () => {
            wrapper = mount(<Image { ...propsWithGoodImageSrc } />);
            expect(wrapper.find(`img[src="${unbrandedStationImage}"]`).exists()).toBe(true);
        });
    });
});