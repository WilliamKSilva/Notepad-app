import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.fontsize.font_large}px;
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
`;


export const WrapperInput = styled.View`
    align-items: center;
    justify-content: center;    
`;

export const WrapperButton = styled.View`
    width: 35%;
    padding: ${({ theme }) => theme.constants.padding_small}%;
    margin-top: ${({ theme }) => theme.constants.margin_small}%;
    margin-right: 57%;
`;