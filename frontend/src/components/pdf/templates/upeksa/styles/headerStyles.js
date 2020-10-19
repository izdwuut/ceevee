import { StyleSheet, Font } from '@react-pdf/renderer';
import * as Variables from './variables'


Font.register(
    {
        family: "Domine",
        fonts: [
            {src: "/fonts/Domine-Bold.ttf", fontWeight: 700},
        ]
    }
);

export const headerStyles = StyleSheet.create({
    
    section: {
        fontFamily: Variables.serifFont
    },
    fullName: {
        display: 'none'
    },
    firstName: {
        fontSize: Variables.headerNameSize,
    },
    middleName: {
        fontSize: Variables.headerNameSize
    },
    lastName: {
        fontSize: Variables.headerNameSize
    },
    position: {
        fontSize: 18,
        color: Variables.detailColor
    }
})