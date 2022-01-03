import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Container } from "./styles";

interface Props extends TextInputProps {
    isFocused: boolean;
};

export function Input({isFocused, ...rest}: Props) {
    const { colors } = useTheme();        
    
    return (
        <Container isFocused={isFocused} {...rest} placeholderTextColor={colors.text} />
    );
}