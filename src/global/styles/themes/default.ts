import { RFValue } from 'react-native-responsive-fontsize'

export const defaultTheme = {    
    colors: {
        primary: "#3d518c",
        primary_light: "#7692ff",

        secondary: "#f6bd60",

        background: "#000814",
        input: "#9f9aa4",
        text: "#FFFFFF", 
    },

    fontsize: {
        font_small: RFValue(15),
        font_medium: RFValue(19),
        font_large: RFValue(22),
        font_logo: RFValue(40) 
    },

    constants: {
        margin_small: 3,
        margin_medium: 6,
        margin_large: 9,
        
        padding_small: 3,
        padding_medium: 6,
        padding_large: 9,
        padding_xlarge: 15,

        padding_xvertical: 19,
    }
}
