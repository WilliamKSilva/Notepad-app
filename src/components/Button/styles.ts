import styled from "styled-components/native";

export const Container = styled.TouchableOpacity` 
    width: 100%;
    background-color: ${({theme}) => theme.colors.secondary};
    padding: ${({theme}) => theme.constants.padding_medium}%;
    margin-top: ${({theme}) => theme.constants.margin_large}%;
    min-width: 120px;
    max-width: 300px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({theme}) => theme.fontsize.font_medium}px;
`;