import styled from "styled-components/native";

export const Container = styled.View`
    width: 48%;
    padding-vertical: ${({ theme }) => theme.constants.padding_medium}%;
    

    align-items: center;
    background: ${({ theme }) => theme.colors.input};
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
`;

export const Header = styled.View`
    width: 100%;
    padding: ${({theme}) => theme.constants.padding_small}%;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.font_medium};
    font-size: ${({ theme }) => theme.fontsize.font_medium}px;
`;

export const Footer = styled.View`
    width: 100%;
    padding: ${({ theme }) => theme.constants.padding_medium}%;
`;

export const Content = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.font_regular};
    font-size: ${({ theme }) => theme.fontsize.font_small}px;
`;