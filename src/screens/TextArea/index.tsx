import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { InputArea } from "../../components/InputArea";
import { Input } from "../../components/InputArea/styles";
import { InputForm } from "../../components/InputForm";
import { Container, Header, WrapperButton } from "./styles";

export function TextArea() {
    const { control, formState: { errors } } = useForm();
    
    return (
        <Container>
            <Header>
                <Input placeholder="Título..." placeholderTextColor="#ffc300" maxLength={32}/>
            </Header>
            <InputArea />
            <WrapperButton>
                <Button title="Salvar"/>
            </WrapperButton>
        </Container>
    );
}