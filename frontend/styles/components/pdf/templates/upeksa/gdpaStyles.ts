import ReactPDF, { StyleSheet } from '@react-pdf/renderer';
import * as Variables from './variables'


const gdpaStyles: ReactPDF.Styles = StyleSheet.create({
    gdpa: {
        paddingTop: Variables.sectionPadding,
    }
})

export default gdpaStyles