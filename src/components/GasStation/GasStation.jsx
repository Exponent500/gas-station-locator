import React, { Component } from 'react';
import Image from '../Image/Image';
import unbrandedStationImage from '../../assets/images/unbranded-station.png';
import fallBackStationImage from '../../assets/images/404.png';
import locationIcon from '../../assets/images/location-pin.png';

import {
    Wrapper,
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
    GasTypeWrapper,
    LocationPin
} from './styles';

class GasStation extends Component {
    renderLogo() {
        const { station } = this.props;
        // Remove all whitespace, including spaces. This handles the corner case where the station name is 'Circle K'. In this case
        // we want to have the string be 'CircleK' instead of 'Circle K'. so that we point to the correct image source for this station.
        station.station = station.station.replace(/\s/g, '');
        // sometimes the GasFeedApi returns stations who's names are 'Unbranded'
        if (station.station === 'Unbranded') {
            return <Image src={unbrandedStationImage} fallBackSrc={fallBackStationImage}></Image>
        } else {
            return <Image src={`//logo.clearbit.com/${station.station}.com`} fallBackSrc={fallBackStationImage}></Image>
        }
    }

    render() {
        const { station } = this.props;
        const destinationAddress = `${station.address} ${station.city} ${station.region} ${station.zip}`
        const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${destinationAddress}`
        return (
            <Wrapper className="col-10 offset-1">
                <LogoWrapper className="col-4 col-md-2">
                    {this.renderLogo()}
                </LogoWrapper>
                <GasStationInfoWrapper className="col-8 col-md-10">
                    <GasStationInfo className="row">
                        <div className="col-12 col-md-6">
                            <Name>
                                {station.station}
                                <LocationPin href={mapLink} target="_blank">
                                    <img src={locationIcon}></img>
                                </LocationPin>
                            </Name>
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