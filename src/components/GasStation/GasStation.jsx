import React, { Component } from 'react';
import unbrandedStationImage from '../../assets/images/unbranded-station.png';

import {
    Wrapper,
    Logo,
    Name,
    Address,
    City,
    Region,
    Zipcode,
    Country,
    DistanceToLocation,
    PricesWrapper,
    RegularPrice,
    MidGradePrice,
    PremiumPrice
} from './styles';

class GasStation extends Component {
    renderLogo() {
        const { station } = this.props;
        if (station.station === 'Unbranded') {
            return <Logo src={unbrandedStationImage}></Logo>
        } else {
            return <Logo src={`//logo.clearbit.com/${station.station}.com`}></Logo>
        }
    }

    render() {
        const { station } = this.props;
        return (
            <Wrapper>
                {this.renderLogo()}
                <Name>{station.station}</Name>
                <Address>{station.address}</Address>
                <City>{station.city}</City>,
                <Region>{station.region}</Region>,
                <Zipcode>{station.zip}</Zipcode>
                <Country>{station.country}</Country>
                <DistanceToLocation>{station.distance}</DistanceToLocation>
                <PricesWrapper>
                    <RegularPrice>{station.reg_price}</RegularPrice>
                    <MidGradePrice>{station.mid_price}</MidGradePrice>
                    <PremiumPrice>{station.pre_price}</PremiumPrice>
                </PricesWrapper>
            </Wrapper>
        )
    }
}

export default GasStation;