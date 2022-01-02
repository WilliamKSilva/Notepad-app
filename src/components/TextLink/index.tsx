import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
    title: string;
    routeName?: string;
}

export function TextLink({title, routeName}: Props) {
    const navigation = useNavigation();
    
    return (
        <Container onPress={() => navigation.navigate(routeName as never)}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}