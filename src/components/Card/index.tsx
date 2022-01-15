import React from "react";
import { useForm } from "react-hook-form";
import { InputForm } from "../InputForm";
import { Container, Header, Title, WrapperContent } from "./styles";

interface Props {
    title: string;
    children: React.ReactNode
}

export function CardInput({title, children}: Props) {    

    return (
        <Container>
            <Header>
                <Title>{title}</Title>
            </Header>            
            <WrapperContent>
                {children}                    
            </WrapperContent>
    </Container>
    )   
}