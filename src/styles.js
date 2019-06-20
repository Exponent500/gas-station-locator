import styled from 'styled-components';

export const AppWrapper = styled.div`
  text-align: center;
`;

export const AppHeader = styled.div`
  background-color: black;
  height: 100px;
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  font-size: 25px;
`;

export const HeaderLogo = styled.img`
  width: 80px;
  height: 80px;
`;

export const HeaderTitle = styled.div`
  margin-left: 10px;
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
  // border: black 1px solid;
  @media all and (max-width: 736px) {
    font-size: 12px;
  }
`;

export const FindStationNearMeButton = styled.button`
  border-left: black 1px solid;
  @media all and (max-width: 736px) {
    font-size: 12px;
  }
`;

export const GasStationSearchBar = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding: 10px;
`;

export const NoResults = styled.div`
`;

export const ErrorRetrievingStations = styled.div`
`;

export const Loading = styled.div`
`;
