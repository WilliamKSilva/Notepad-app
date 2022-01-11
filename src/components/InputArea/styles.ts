import styled from "styled-components/native";

export const Container = styled.View`    
    padding: ${({ theme }) => theme.constants.padding_small}%;
    margin-top: ${({ theme }) => theme.constants.margin_medium}%;    
`;

export const Input = styled.TextInput`   
   font-size: ${({ theme }) => theme.fontsize.font_medium}px;
`;