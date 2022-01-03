import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { Text } from "../../components/Text";
import { Container, Title, WrapperButton, WrapperContent, WrapperInput } from "./styles";

export function Register() {
    const { control, formState: { errors } } = useForm();

    return (
        <Container>            
            <WrapperContent>
                <Text
                    title="Insira suas informações:"
                />
                <WrapperInput>
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
                </WrapperInput>
                <WrapperButton>
                    <Button 
                        title="Enviar"
                    />
                </WrapperButton>                
            </WrapperContent>
        </Container>
    );
}