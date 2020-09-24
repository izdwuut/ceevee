import React from 'react';
import { Document, Page, View, StyleSheet, Font } from '@react-pdf/renderer';
import Custom from '../Custom'
import Certificates from '../Certificates'
import Header from '../Header'
import Skills from '../Skills';
import Links from '../Links'
import Details from '../Details'
import Languages from '../Languages'
import Hobbies from '../Hobbies';
import GDPA from '../GDPA';

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});
export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    // fontFamily : "Roboto"
  },
  contents: {
    margin: 10,
    padding: 10,
    flexGrow: 0.8,
    width: 80
  },
  sidebar: {
    padding: 20,
    flexGrow: 0.2,
    width: 20,
    backgroundColor: "yellow"
  }
});

export default class PDF extends React.Component {
  constructor(props) {
    super(props)
  }
    render() {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.sidebar}>
              <Header replace={this.props.header} />
              <Details/>
              <Links/>
              <Skills/>
              <Languages/>
              <Hobbies/>
          </View>
          <View style={styles.contents}>
            <Custom replace={this.props.summary}/>
            <Certificates />
            <Custom replace={{header: ''}}/>
            <Custom replace={{header: ''}}/>
            <GDPA/>
          </View>
        </Page>
      </Document>
    )
  }
}

