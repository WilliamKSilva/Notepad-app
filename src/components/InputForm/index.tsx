import React from "react";
import { Controller, Control } from "react-hook-form";
import { Text, TextInputProps } from "react-native";
import { Input } from "../Input";
import { Container } from "./styles";

interface Props extends TextInputProps {
    control: Control;
    name: string;
    placeholder: string;
    error: string;
    required?: boolean;
}

export function InputForm({control, name, error, placeholder, required, ...rest}: Props) {

    return (
        <Container>
            <Controller 
                control={control}
                render={({field: { onChange, value }}) => (
                    <Input 
                        onChangeText={onChange}
                        placeholder={placeholder}                        
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
            {error && <Text>{error}</Text>}
        </Container>
    );
}