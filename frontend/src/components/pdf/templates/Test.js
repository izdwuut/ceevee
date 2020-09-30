import React from 'react';
import { Document, Page, View, StyleSheet, Font, Text } from '@react-pdf/renderer';
import Custom from '../Custom'
import Certificates from '../Certificates'
import Header from '../Header'
import Skills from '../Skills';
import Links from '../Links'
import Details from '../Details'
import Languages from '../Languages'
import Hobbies from '../Hobbies';
import GDPA from '../GDPA';
import MainContext from '../../../CreateCVApp';
import { Provider } from 'react-redux'
import store from '../../../redux/store'
import Spacer from '../Spacer';

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});
export const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    // fontFamily : "Roboto",
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

const headerStyles = StyleSheet.create({

})

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

