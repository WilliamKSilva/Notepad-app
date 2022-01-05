import styled from "styled-components/native";

export const Container = styled.View`
  width: 85%;
  padding-bottom: 5%;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.input};
  
`;

export const WrapperContent = styled.View``;

export const Header = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.constants.padding_large}%;
  margin-bottom: 10%;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.font_small}px;
  color: ${({theme}) => theme.colors.background};
  text-decoration: solid;

  margin-right: 35%;
`;