import React from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import Custom from '../Custom'
import Certificates from '../Certificates'
import Header from '../Header'
import Skills from '../Skills';
import Links from '../Links'
import Details from '../Details'
import Languages from '../Languages'
import Hobbies from '../Hobbies';
import GDPA from '../../GDPA';
export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
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
  render() {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.sidebar}>
              <Header/>
              <Details/>
              <Links/>
              <Skills/>
              <Languages/>
              <Hobbies/>
          </View>
          <View style={styles.contents}>
            <Custom />
            <Certificates />
            <Custom />
            <Custom />
            <GDPA/>
          </View>
        </Page>
      </Document>
    )
  }
}

