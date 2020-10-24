import { StyleSheet, Font } from '@react-pdf/renderer';
import * as Variables from './variables'

Font.register(
    {
        family: "Montserrat",
        fonts: [

            { src: "/fonts/Montserrat-Bold.ttf", fontWeight: 700 },
            { src: "/fonts/Montserrat-BoldItalic.ttf", fontStyle: 'italic', fontWeight: 700 },
            { src: "/fonts/Montserrat-Light.ttf", fontWeight: 300 },
            { src: "/fonts/Montserrat-LightItalic.ttf", fontStyle: 'italic', fontWeight: 300 },
        ]
    },
);

export const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        fontFamily: "Montserrat",
        fontWeight: 300,
        fontSize: '8pt',
        paddingBottom: '17mm',
        height: '100%',
        objectFit: '100%',
        backgroundColor: Variables.backgroundColor
    },
    contents: {
        paddingHorizontal: Variables.marginHorizontal,
        flexDirection: 'row',
    },
    leftColumn: {
        width: '50mm',
        textAlign: 'right'
    },
    middleColumnLeft: {
        width: Variables.middleColumnWidth,
    },
    middleColumnRight: {
        width: Variables.middleColumnWidth,
    },
    rightColumn: {
        width: '105mm',
    },
    header: {
        height: '26mm',
    },
    // footer: {
    //     height: Variables.marginBottom,
    //     backgroundColor: 'yellow',
    //     position: 'absolute',
    //     bottom: -1,
    //     width: '100%',
    // },
    // footerColumn: {
    //     height: '100%',
    //     marginBottom: Variables.marginBottom,
    //     borderRight: '1 solid black',
    //     width: '90mm',
    //     position: 'relative',
    //     top: -1
    // },
});