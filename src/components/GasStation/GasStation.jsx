import React, { Component } from 'react';
import unbrandedStationImage from '../../assets/images/Transport-Gas-Pump-icon.png';

import {
    Wrapper,
    Logo,
    LogoWrapper,
    Name,
    AddressLine1,
    AddressLine2,
    City,
    Region,
    Zipcode,
    Country,
    DistanceToLocation,
    PricesWrapper,
    RegularPrice,
    MidGradePrice,
    PremiumPrice,
    GasTypeHeader,
    GasStationInfoWrapper,
    GasStationInfo,
    GasTypeWrapper
} from './styles';

class GasStation extends Component {
    renderLogo() {
        const { station } = this.props;
        // Remove all whitespace, including spaces. This handles the corner case where the station name is 'Circle K'. In this case
        // we want to have the string be 'CircleK' instead of 'Circle K'. so that we point to the correct image source for this station.
        station.station = station.station.replace(/\s/g, '');
        if (station.station === 'Unbranded') {
            return <Logo src={unbrandedStationImage}></Logo>
        } else {
            return <Logo src={`//logo.clearbit.com/${station.station}.com`} alt={unbrandedStationImage}></Logo>
        }
    }

    render() {
        const { station } = this.props;
        return (
            <Wrapper className="col-10 offset-1">
                <LogoWrapper className="col-4 col-md-2">
                    {this.renderLogo()}
                </LogoWrapper>
                <GasStationInfoWrapper className="col-8 col-md-10">
                    <GasStationInfo className="row">
                        <div className="col-12 col-md-6">
                            <Name>{station.station}</Name>
                            <AddressLine1>{station.address}</AddressLine1>
                            <AddressLine2>
                                <City>{station.city}</City>,
                                <Region>{station.region}</Region>,
                                <Zipcode>{station.zip}</Zipcode>
                            </AddressLine2>
                            <Country>{station.country}</Country>
                            <DistanceToLocation>{station.distance} away</DistanceToLocation>
                        </div>
                        <PricesWrapper className="col-12 col-md-6">
                            <GasTypeWrapper className="col-md-4">
                                <GasTypeHeader>Regular</GasTypeHeader>
                                <RegularPrice>${station.reg_price}</RegularPrice>
                            </GasTypeWrapper>
                            <GasTypeWrapper className="col-md-4">
                                <GasTypeHeader>Mid</GasTypeHeader>
                                <MidGradePrice>${station.mid_price}</MidGradePrice>
                            </GasTypeWrapper>
                            <GasTypeWrapper className="col-md-4">
                                <GasTypeHeader>Premium</GasTypeHeader>
                                <PremiumPrice>${station.pre_price}</PremiumPrice>
                            </GasTypeWrapper>
                        </PricesWrapper>
                    </GasStationInfo>
                </GasStationInfoWrapper>
            </Wrapper>
        )
    }
}

export default GasStation;