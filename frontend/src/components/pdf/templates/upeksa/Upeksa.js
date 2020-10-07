import React from 'react'
import { Document, Page, View, Text } from '@react-pdf/renderer'
import Custom from '../../Custom'
import Certificates from '../../Certificates'
import Header from '../../Header'
import Skills from '../../Skills'
import Links from '../../Links'
import Details from '../../Details'
import Languages from '../../Languages'
import Hobbies from '../../Hobbies'
import GDPA from '../../GDPA'
import MainContext from '../../../../CreateCVApp'
import { Provider } from 'react-redux'
import store from '../../../../redux/store'
import Spacer from '../../Spacer'
import Education from '../../Education'

import { styles } from './styles/styles'
import { headerStyles } from './styles/headerStyles'
import { detailsStyles } from './styles/detailsStyles'
import { skillsStyles } from './styles/skillsStyles'
import { hobbiesStyles } from './styles/hobbiesStyles'
import { experienceStyles } from './styles/experienceStyles'
import { languagesStyles } from './styles/languagesStyles'
import { educationStyles } from './styles/educationStyles'
import { linksStyles } from './styles/linksStyles'

import Experience from '../../Experience'





export default class Upeksa extends React.Component {
  render() {
    return (
      <Provider store={store} context={MainContext}>
        <Document>
          <Page style={styles.page}>
            <View style={styles.header} fixed></View>
            <Header context={MainContext} style={headerStyles}></Header>
            <Spacer size='15'></Spacer>
            <View style={styles.contents}>
              <View style={styles.leftColumn}>
                <Details context={MainContext} style={detailsStyles} />
                <Skills context={MainContext} style={skillsStyles} />
                <Links context={MainContext} style={linksStyles} />
                <Languages context={MainContext} style={languagesStyles} />
                <Hobbies context={MainContext} style={hobbiesStyles} />
              </View>

              <View style={styles.middleColumnLeft}></View>
              <View style={styles.middleColumnRight}></View>

              <View style={styles.rightColumn}>
                <Experience style={experienceStyles} context={MainContext} />
                <Education style={educationStyles} context={MainContext} />
              </View>

            </View>
            <View>
              <View style={styles.footerColumn}>
                <Text> </Text>
              </View>
            </View>
            <View style={styles.footer} fixed>
              <Text> </Text>
            </View>
          </Page>
        </Document>
      </Provider>
    )
  }
}

