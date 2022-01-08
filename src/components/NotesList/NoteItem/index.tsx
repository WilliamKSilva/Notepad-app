import React from "react";
import { Container, Content, Footer, Header, Title } from "./styles";

export interface ListItem {
    id: string;
    name: string;
    content: string;
}

export function NoteItem({name, content, ...rest}: ListItem) {
    return (
        <Container {...rest}>
            <Header>
                <Title>{name}</Title>
            </Header>
            <Footer>
                <Content>{content}</Content>
            </Footer>
        </Container>
    );
}