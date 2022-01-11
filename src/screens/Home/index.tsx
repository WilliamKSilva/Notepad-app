import { useNavigation } from "@react-navigation/core";
import React from "react";
import { NotesList } from "../../components/NotesList";
import { notes } from "../../utils/notes";
import { AddIcon, Clickable, Container, Content, Greeting, Header, Icon, Title, WrapperTitle } from "./styles";

export function Home() {
    const navigation = useNavigation();

    return (
        <Container>
            <Header>
                <Greeting>Hello, William</Greeting>
                <Icon name="menu"/>
            </Header>
            <WrapperTitle>                
                <Clickable onPress={() => navigation.navigate("TextArea")}>
                    <AddIcon name="post-add" size={50}/>
                </Clickable>
            </WrapperTitle>
            <Content>
                <NotesList 
                    dataNotes={notes}
                />
            </Content>
        </Container>
    );
}