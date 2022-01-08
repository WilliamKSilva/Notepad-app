import React from "react";
import { NotesList } from "../../components/NotesList";
import { Text } from "../../components/Text";
import { notes } from "../../utils/notes";
import { Container, Content, Greeting, Header, Icon } from "./styles";

export function Home() {
    return (
        <Container>
            <Header>
                <Greeting>Olá,{"\n"}Bom dia!</Greeting>
                <Icon name="menu"/>
            </Header>
            <Content>
                <NotesList 
                    dataNotes={notes}
                />
            </Content>
        </Container>
    );
}