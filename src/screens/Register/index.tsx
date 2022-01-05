import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { CardInput } from "../../components/Card";
import { Card } from "../../components/CardInput";
import { InputForm } from "../../components/InputForm";
import { Text } from "../../components/Text";
import { Container, Title, WrapperButton, WrapperInput } from "./styles";

export function Register() {
    const { control, formState: { errors } } = useForm();

    return (
        <Container>                       
            <CardInput title="Insira suas informações:" />
            <WrapperButton>
                
                <Button title="Enviar"/>
            </WrapperButton>      
        </Container>
    );
}