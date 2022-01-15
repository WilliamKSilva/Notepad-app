import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};    
`;

export const Header = styled.View`
    width: 95%;
    margin-left: 1.6%;

    padding-vertical: ${({ theme}) => theme.constants.padding_medium}%;    
    border-bottom-width: 2px;
    border-bottom-color: ${({ theme }) => theme.colors.input};   
`;

export const WrapperButton = styled.View`
    width: 100%;
    position: absolute;
    bottom: 5%;
    left: 10%;
`;
