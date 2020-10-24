import { StyleSheet, Font } from '@react-pdf/renderer';
import * as Variables from './variables'

Font.register(
    {
        family: Variables.serifFont,
        fonts: [
            {src: Variables.serifFontURL, fontWeight: 400},
        ]
    }
);

export const educationStyles = StyleSheet.create({
    header: {
        fontFamily: Variables.serifFont,
        fontWeight: 400,
        fontSize: 16,
        paddingBottom: Variables.contentsPadding
    },

    metaData: {
        fontWeight: Variables.contentsSectionMetaDataFontWeight,
    },
    description: {
        paddingTop: Variables.contentsDescriptionPadding,
        paddingBottom: Variables.contentsPadding
    }
})