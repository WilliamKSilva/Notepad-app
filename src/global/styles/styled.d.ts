import styled from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            primary_light: string;

            secondary: string;

            background: string;
            input: string;
            text: string;                              
        },

        fontsize: {
            font_small: number;
            font_medium: number;
            font_large: number;
            font_logo: number; 
        },

        constants: {
            margin_small: number;
            margin_medium: number;
            margin_large: number;
            
            padding_small: number;
            padding_medium: number;
            padding_large: number;
            padding_xlarge: number;

            padding_xvertical: number;
        }
    }
}