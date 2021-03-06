import ReactPDF, { StyleSheet, Font, } from '@react-pdf/renderer';
import * as Variables from './variables'

Font.register(
    {
        family: Variables.serifFont,
        fonts: [
            {src: Variables.serifFontURL, fontWeight: 400},
        ]
    }
);

const headerStyles: ReactPDF.Styles = StyleSheet.create({
    section: {
        fontFamily: Variables.serifFont,
        position: 'relative',
        top: Variables.headerTopPosition
    },
    firstName: {
        fontSize: Variables.headerNameSize,
    },
    middleName: {
        fontSize: Variables.headerNameSize,
        position: 'relative',
        top: Variables.headerTopPosition
    },
    lastName: {
        fontSize: Variables.headerNameSize,
        position: 'relative',
        top: Variables.headerTopPosition
    },
    position: {
        fontSize: 18,
        color: Variables.detailColor,
        position: 'relative',
        top: Variables.headerTopPosition - 4
    }
})

export default headerStyles
