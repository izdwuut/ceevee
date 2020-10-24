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

export const experienceStyles = StyleSheet.create({
    header: {
        fontFamily: Variables.serifFont,
        fontWeight: 400,
        fontSize: 16,
    },

    metaData: {
        fontWeight: Variables.contentsSectionMetaDataFontWeight,
        paddingTop: Variables.contentsPadding
    },
    description: {
        paddingTop: Variables.contentsDescriptionPadding,
        paddingBottom: Variables.contentsPadding
    }
})