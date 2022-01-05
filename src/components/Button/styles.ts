import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`     
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    padding: ${({theme}) => theme.constants.padding_medium}%;
    margin-top: ${({theme}) => theme.constants.margin_large}%;
    min-width: 50px;
    max-width: 300px;
    justify-content: center;
    align-items: center;    
    border-radius: 20px;    
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({theme}) => theme.fontsize.font_medium}px;    
`;