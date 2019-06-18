import styled from 'styled-components';

export const AppWrapper = styled.div`
  text-align: center;
`;

export const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const ContentWrapper = styled.div`
`;

export const LocationInput = styled.input`
  @media all and (max-width: 736px) {
    font-size: 12px;
  }
`;

export const RadiusSelect = styled.select`
  @media all and (max-width: 736px) {
    font-size: 12px;
  }
`;

export const FindStationButton = styled.button`
  @media all and (max-width: 736px) {
    font-size: 12px;
  }
`;

export const FindStationNearMeButton = styled.button`
  @media all and (max-width: 736px) {
    font-size: 12px;
  }
`;

export const GasStationSearchBar = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding: 10px;
`;
