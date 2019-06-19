import styled from 'styled-components';

export const PageSizeSelect = styled.select`
    width: 50px;
    display: inline-block;
    @media all and (max-width: 736px) {
        font-size: 14px;
        width: 65px;
    }
`;

export const PageSelect = styled.select`
    width: 50px;
    display: inline-block;
    @media all and (max-width: 736px) {
        font-size: 14px;
        width: 55px;
    }
`;

export const PageSizeSelectLabel = styled.label`
    text-align: right;
    padding-right: 5px;
    @media all and (max-width: 736px) {
        font-size: 14px;
    }
`;

export const PageSelectLabel = styled.label`
    text-align: right;
    padding-right: 5px;
    @media all and (max-width: 736px) {
        font-size: 14px;
    }
`;

export const PaginationContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`;

export const PageSelectContainer = styled.div`
    display: inline;
`;

export const PageSizeContainer = styled.div`
    display: inline;
`;