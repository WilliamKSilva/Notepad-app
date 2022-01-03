import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.fontsize.font_large}px;
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
`;

export const WrapperContent = styled.View`
    justify-content: center;    
    padding-vertical: ${({ theme }) => theme.constants.padding_xvertical}%;

`;

export const WrapperInput = styled.View`
    align-items: center;
    justify-content: center;    
`;

export const WrapperButton = styled.View`
    width: 40%;
    padding: ${({ theme }) => theme.constants.margin_medium}%;
    margin-top: ${({ theme }) => theme.constants.margin_large}%;
`;