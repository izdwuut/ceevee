import { StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
    family: "Roboto",
    src:
        "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});

export const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        fontFamily: "Roboto",
        paddingBottom: 20
    },
    contents: {
        paddingHorizontal: 20,
        marginBottom: 50,
        flexGrow: 0.8,
        width: 80
    },
    sidebar: {
        paddingHorizontal: 20,
        flexGrow: 0.2,
        width: 20,
        backgroundColor: "yellow"
    },
    header: {
        flexDirection: 'row'
    },
    headerSidebar: {
        paddingHorizontal: 10,
        flexGrow: 0.2,
        height: 20,
        backgroundColor: 'blue'
    },
    main: {
        flexDirection: 'row',
    },
    footer: {
        flexDirection: 'row',
        height: '100%',
    },
    footerSidebar: {
        paddingHorizontal: 10,
        flexGrow: 0.2,
        height: '100%',
        backgroundColor: 'blue'
    },
});