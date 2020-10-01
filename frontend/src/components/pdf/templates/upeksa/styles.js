import { StyleSheet, Font} from '@react-pdf/renderer';
import { marginVertical } from './variables'

Font.register({
    family: "Roboto",
    src:
        "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});

export const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        // fontFamily : "Roboto",
        paddingBottom: marginVertical,
        height: '100%',
        objectFit: '100%'
    },
    contents: {
        paddingHorizontal: '25mm',
        flexDirection: 'row',
        fontSize: 8
    },
    leftColumn: {
        width: '60mm',
        backgroundColor: 'red'
    },
    middleColumnLeft: {
        borderRight: '1 solid black',
        width: '5mm',
    },
    middleColumnRight: {
        width: '5mm',
    },
    rightColumn: {
        width: '100mm',
    },
    header: {
        backgroundColor: 'blue',
        height: marginVertical,
    },
    footer: {
        height: marginVertical,
        backgroundColor: 'yellow',
        position: 'absolute',
        bottom: -1,
        width: '100%',
    },
    footerColumn: {
        height: '100%',
        marginBottom: marginVertical,
        borderRight: '1 solid black',
        width: '90mm',
        position: 'relative',
        top: -1
    },
});