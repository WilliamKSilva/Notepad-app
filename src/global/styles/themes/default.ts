import { RFValue } from 'react-native-responsive-fontsize'
import {  } from '../../../../'

export const defaultTheme = {    
    colors: {
        primary: "#00506c",
        primary_light: "#3a86ff",

        secondary: "#ffc300",

        background: "#FFFFFF",
        input: "#ced4da",
        text: "#000000",
    },

    fonts: {
        font_regular: 'Roboto_400Regular',
        font_medium: 'Roboto_500Medium',
        font_bold: 'Roboto_700Bold',
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
