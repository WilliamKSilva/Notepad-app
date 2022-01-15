import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: center;
    
`;

export const WrapperButton = styled.View`
    width: 35%;;
    margin-right: 52%;
    margin-top: ${({ theme }) => theme.constants.margin_medium}%;
`;