import styled from "styled-components/native";

export const Container = styled.View`
    padding: ${({ theme }) => theme.constants.padding_medium}%;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.fontsize.font_small}px;
    color: ${({ theme }) => theme.colors.text};
`;