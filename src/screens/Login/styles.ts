import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const Container = styled.View`
    flex: 1;    
    
    background-color: ${({theme}) => theme.colors.background};
`;

export const WrapperLogo = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 20%;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsize.font_logo}px;
`;

export const Logo = styled(MaterialCommunityIcons)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontsize.font_logo}px;
`;

export const WrapperContent = styled.View`    
    flex: 1;
    justify-content: center;
    align-items: center;        
`;




