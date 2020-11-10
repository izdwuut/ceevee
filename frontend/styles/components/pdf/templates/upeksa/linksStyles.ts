import ReactPDF, { StyleSheet, Font } from '@react-pdf/renderer';
import * as Variables from './variables'

Font.register(
    {
        family: Variables.serifFont,
        fonts: [
            { src: Variables.serifFontURL, fontWeight: 400 },
        ]
    }
);

const linksStyles: ReactPDF.Styles = StyleSheet.create({
    header: {
        fontFamily: Variables.serifFont,
        fontWeight: 400,
        fontSize: 16,
        paddingBottom: Variables.sectionPadding
    },

    link: {
        color: Variables.fontColor,
        paddingBottom: Variables.contentsSpacing
    },
    section: {
        paddingBottom: Variables.sectionPadding
    }
})

export default linksStyles
