import styled from "styled-components/native";

export const Container = styled.TextInput`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.input}; 
   color: white;  
   border-radius: 15px;
   padding-horizontal: ${({ theme }) => theme.constants.padding_xlarge}px;
   text-decoration: none;
   margin-top: ${({ theme }) => theme.constants.padding_xlarge}px;
   justify-content: center;   
   align-items: center;   
`;