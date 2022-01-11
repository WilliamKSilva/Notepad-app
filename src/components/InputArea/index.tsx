import React from "react";
import { Container, Input } from "./styles";

export function InputArea() {
    return (      
        <Container>
            <Input placeholder="Write here..." multiline maxLength={500}/>
        </Container>
    )
}