import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    padding-vertical: ${({ theme }) => theme.constants.padding_medium}%;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const WrapperTitle = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    padding: ${({ theme }) => theme.constants.padding_small}%;    
    margin-top: ${({ theme }) => theme.constants.margin_large}%;
`;

export const Greeting = styled.Text`
    font-size: ${({ theme }) => theme.fontsize.font_medium}px;
    padding: ${({ theme }) => theme.constants.padding_medium}%;
    color: ${({ theme }) => theme.colors.background};
`;

export const Icon = styled(Entypo)`
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.fontsize.font_logo}px;
    margin-right: ${({ theme }) => theme.constants.margin_medium}%;
`;

export const Content = styled.View`
    padding-vertical: ${({ theme }) => theme.constants.padding_small}%;
    margin-top: ${({ theme }) => theme.constants.margin_medium}%;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.fontsize.font_medium}px;
    font-family: ${({ theme }) => theme.fonts.font_medium};
    color: ${({ theme }) => theme.colors.text};    
    text-decoration: underline;    
`;

export const Clickable = styled.TouchableOpacity``;

export const AddIcon = styled(MaterialIcons)`    
    color: ${({ theme }) => theme.colors.secondary};
    margin-right: ${({ theme }) => theme.constants.margin_medium}%;
`;