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
    GasTypeHeader
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
            <Wrapper className="col-10 offset-1">
                <LogoWrapper className="col-2">
                    {this.renderLogo()}
                </LogoWrapper>
                <div className="col-4">
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
                <PricesWrapper className="col-6">
                    <div className="col-4">
                        <GasTypeHeader>Regular</GasTypeHeader>
                        <RegularPrice>${station.reg_price}</RegularPrice>
                    </div>
                    <div className="col-4">
                        <GasTypeHeader>Mid</GasTypeHeader>
                        <MidGradePrice>${station.mid_price}</MidGradePrice>
                    </div>
                    <div className="col-4">
                    <   GasTypeHeader>Premium</GasTypeHeader>
                        <PremiumPrice>${station.pre_price}</PremiumPrice>
                    </div>
                </PricesWrapper>
            </Wrapper>
        )
    }
}

export default GasStation;