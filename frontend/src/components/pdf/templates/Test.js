import React from 'react';
import { Document, Page, View } from '@react-pdf/renderer';
import { Provider } from 'react-redux'

import MainContext from '../../../pages/_document';
import store from '../../../store/store'

import Spacer from '../Spacer';
import Custom from '../Custom'
import Certificates from '../Certificates'
import Header from '../Header'
import Skills from '../Skills';
import Links from '../Links'
import Details from '../Details'
import Languages from '../Languages'
import Hobbies from '../Hobbies';
import GDPA from '../GDPA';

import styles from '../../../../styles/pdf/templates/test/styles'


export default class Test extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store} context={MainContext}>
        <Document>
          <Page style={styles.page}>
            <View style={styles.header} fixed>
              <View style={styles.headerSidebar}></View>
            </View>
            <View style={styles.main}>
              <View style={styles.sidebar}>
                <Header context={MainContext} />
                <Spacer margin="10"/>
                <Details context={MainContext} />
                <Spacer margin="10"/>
                <Links />
                <Spacer margin="10"/>
                <Skills />
                <Spacer margin="10"/>
                <Languages />
                <Spacer margin="10"/>
                <Hobbies />
              </View>
              <View style={styles.contents}>
                <Custom />
                <Certificates />
                <Custom />
                <Custom />
                <GDPA />
              </View>
            </View>
            <View style={styles.footer} fixed>
              <View style={styles.footerSidebar}></View>
            </View>
          </Page>
        </Document>
      </Provider>
    )
  }
}

