import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import CustomSection from '../../sections/Custom'
import CertifiactesSection from '../../sections/Certificates'
import Header from '../../sections/Header'

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    width: 50
  }
});

export default class PDF extends React.Component {
  render() {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>
              <Header/>
            </Text>
          </View>
          <View style={styles.section}>
            <CustomSection />
            <CertifiactesSection />
          </View>
        </Page>
      </Document>
    )
  }
}

