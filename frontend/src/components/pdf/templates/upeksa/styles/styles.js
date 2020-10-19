import { StyleSheet, Font} from '@react-pdf/renderer';
import  * as Variables  from './variables'

Font.register({
    family: "Roboto",
    src:
        "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});

export const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        // fontFamily : "Roboto",
        paddingBottom: '17mm',
        height: '100%',
        objectFit: '100%',
    },
    contents: {
        paddingHorizontal: Variables.marginHorizontal,
        flexDirection: 'row',
        fontSize: 8
    },
    leftColumn: {
        width: '50mm',
        backgroundColor: 'red'
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
        backgroundColor: 'blue',
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