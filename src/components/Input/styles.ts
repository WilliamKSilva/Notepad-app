import styled from "styled-components/native";

interface StyleProps {
   isFocused: boolean;
};

export const Container = styled.TextInput<StyleProps>`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};   
   color: white; 
   border-bottom-width: 2px;
   border-bottom-color: ${({ theme, isFocused }) => isFocused === true ? theme.colors.secondary :
      theme.colors.primary
   };
   border-radius: 15px;
   padding-horizontal: ${({ theme }) => theme.constants.padding_xlarge}px;
   text-decoration: none;
   margin-top: ${({ theme }) => theme.constants.padding_xlarge}px;
   justify-content: center;   
   align-items: center;   
`;