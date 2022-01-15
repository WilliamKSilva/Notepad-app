import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { CardInput } from "../../components/Card";
import { InputForm } from "../../components/InputForm";
import { Container, Title, WrapperButton } from "./styles";

export function Register() {
    const { control, formState: { errors } } = useForm();

    return (
        <Container>                       
            <CardInput title="Digite seus dados">
                <InputForm 
                    control={control}                    
                    name="name"
                    placeholder="Nome"
                    required
                    error={errors.name?.message}
                    autoCapitalize="sentences"
                />
                <InputForm 
                    control={control}                    
                    name="email"
                    placeholder="Email"
                    required
                    error={errors.email?.message}
                    autoCapitalize="none"
                />
                <InputForm 
                    control={control}                    
                    name="password"
                    placeholder="Senha"
                    required
                    error={errors.password?.message}
                    autoCapitalize="none"
                />
            </CardInput>
            <WrapperButton>                
                <Button title="Enviar"/>
            </WrapperButton>      
        </Container>
    );
}