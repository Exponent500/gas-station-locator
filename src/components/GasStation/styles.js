import styled from 'styled-components';

export const Wrapper = styled.div`
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px gray;
    position: relative;
    margin-top: 25px;
    background-color: white;
    display: flex;
    &:hover {
        border: 1px solid blue;
    };
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid black;
`;

export const Logo = styled.img`
    max-height: 100%;
    max-width: 100%;
    border-radius: 10px;
`;

export const Name = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: 25px;
`;

export const AddressLine1 = styled.div`
    font-size: 14px;
    text-align: left;
    color: gray;
`;

export const AddressLine2 = styled.div`
    font-size: 14px;
    text-align: left;
    color: gray;
`;

export const City = styled.span`
    font-size: 14px;
    color: gray;
`;

export const Region = styled.span`
    font-size: 14px;
    color: gray;
    margin-left: 2px;
`;

export const Zipcode = styled.span`
    font-size: 14px;
    color: gray;
    margin-left: 2px;
`;

export const Country = styled.div`
    font-size: 14px;
    color: gray;
    text-align: left;
`;

export const DistanceToLocation = styled.div`
    font-size: 14px;
    text-align: left;
    color: gray;
`;

export const PricesWrapper = styled.div`
    display: flex;
    border-left: 1px solid black;
`;

export const RegularPrice = styled.div`
`;

export const MidGradePrice = styled.div`
`;

export const PremiumPrice = styled.div`
`;

export const GasTypeHeader = styled.div`
    font-size: 18px;
    font-weight: bold;
`;