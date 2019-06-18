import styled from 'styled-components';

export const Wrapper = styled.div`
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px gray;
    position: relative;
    margin-top: 25px;
    background-color: white;
    display: flex;
    &:hover {
        border: 1px solid #9fb7dd;
        border-left: 10px solid #9fb7dd;
    };
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px dashed black;
    padding-left: 0px;
`;

export const Name = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: 25px;
    @media all and (max-width: 736px) {
        font-size: 20px;
    }
`;

export const AddressLine1 = styled.div`
    font-size: 14px;
    text-align: left;
    color: gray;
    @media all and (max-width: 736px) {
        font-size: 12px;
    }
`;

export const AddressLine2 = styled.div`
    font-size: 14px;
    text-align: left;
    color: gray;
    @media all and (max-width: 736px) {
        font-size: 12px;
    }
`;

export const City = styled.span`
    font-size: 14px;
    color: gray;
    @media all and (max-width: 736px) {
        font-size: 12px;
    }
`;

export const Region = styled.span`
    font-size: 14px;
    color: gray;
    margin-left: 2px;
    @media all and (max-width: 736px) {
        font-size: 12px;
    }
`;

export const Zipcode = styled.span`
    font-size: 14px;
    color: gray;
    margin-left: 2px;
    @media all and (max-width: 736px) {
        font-size: 12px;
    }
`;

export const Country = styled.div`
    font-size: 14px;
    color: gray;
    text-align: left;
    @media all and (max-width: 736px) {
        font-size: 12px;
    }
`;

export const DistanceToLocation = styled.div`
    font-size: 14px;
    text-align: left;
    color: gray;
    @media all and (max-width: 736px) {
        font-size: 12px;
    }
`;

export const PricesWrapper = styled.div`
    display: flex;
    text-align: left;
    padding-top: 0px;
    padding-right: 5px;
    padding-left: 10px;
    @media all and (max-width: 736px) {
        padding-top: 10px;
    }
`;

export const GasTypeHeader = styled.div`
    font-size: 18px;
    font-weight: bold;
    @media all and (max-width: 736px) {
        font-size: 12px;
    }
`;

export const GasTypeWrapper = styled.div`
    text-align: center;

    @media all and (max-width: 736px) {
        padding-right: 5px;
        padding-left: 5px;
    }
`;

export const RegularPrice = styled.div`
    @media all and (max-width: 736px) {
        font-size: 12px;
    }
`;

export const MidGradePrice = styled.div`
    @media all and (max-width: 736px) {
        font-size: 12px;
    }
`;

export const PremiumPrice = styled.div`
    @media all and (max-width: 736px) {
        font-size: 12px;
    }
`;

export const GasStationInfoWrapper = styled.div`
    display: flex;
    padding-right: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const GasStationInfo = styled.div`
    width: 100%;
`;

export const LocationPin = styled.a`
    img {
        height: 25px;
        width: 25px;
        margin-bottom: 2px;
        margin-left: 3px;
    }

    @media all and (max-width: 736px) {
        img {
            height: 20px;
            width: 20px;
        }
    }
`;