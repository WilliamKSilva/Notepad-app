import React from "react";
import { Container, Content, Footer, Header, Title } from "./styles";

export interface ListItem {
    id: string;
    name: string;
    content: string;
}

export function NoteItem({name, content, ...rest}: ListItem) {
    const filterName = name.slice(0, 15) + '...';
    const filterContent = content.slice(0, 33) + '...'

    return (
        <Container {...rest}>
            <Header>
                <Title>{filterName}</Title>
            </Header>
            <Footer>
                <Content>{filterContent}</Content>
            </Footer>
        </Container>
    );
}