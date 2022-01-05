import React from "react";
import { useForm } from "react-hook-form";
import { InputForm } from "../InputForm";
import { Container, Header, Title, WrapperContent } from "./styles";

interface Props {
    title: string;
}

export function CardInput({title}: Props) {
    const { control, formState: { errors } } = useForm();

    return (
        <Container>
            <Header>
                <Title>{title}</Title>
            </Header>            
            <WrapperContent>
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
            </WrapperContent>
    </Container>
    )   
}