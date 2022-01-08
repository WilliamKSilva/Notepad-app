import React from "react";
import { NoteItem } from "./NoteItem";
import { Container } from "./styles";
import { ListItem } from './NoteItem'

interface Props {
    dataNotes: ListItem[];
}

interface ListData {
    item: ListItem;
}

export function NotesList({ dataNotes }: Props) {
    return (
        <Container             
            data={dataNotes}
            renderItem={({item}: ListData) => (
                <NoteItem 
                    id={item.id}
                    name={item.name}
                    content={item.content}
                />
            )}
            numColumns={2}
            keyExtractor={(item: any) => item.id}
            columnWrapperStyle={{
                justifyContent: 'space-between',
                padding: 10
                
            }}
        />
    );
}