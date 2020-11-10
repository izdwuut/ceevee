import ReactPDF, { StyleSheet, Font } from '@react-pdf/renderer';
import * as Variables from './variables'

Font.register(
    {
        family: Variables.serifFont,
        fonts: [
            {src: Variables.serifFontURL, fontWeight: 400},
        ]
    }
);

const hobbiesStyles: ReactPDF.Styles = StyleSheet.create({
    header: {
        fontFamily: Variables.serifFont,
        fontWeight: 400,
        fontSize: 16,
        paddingBottom: Variables.sectionPadding
    },
    hobby: {
        paddingBottom: Variables.contentsSpacing
    },
    section: {
        paddingBottom: Variables.sectionPadding
        
    }
})

export default hobbiesStyles
