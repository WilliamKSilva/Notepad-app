import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    padding: ${({theme}) => theme.constants.padding_medium}%;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontsize.font_small}px;
    text-decoration: underline;
`;