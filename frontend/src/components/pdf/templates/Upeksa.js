import React from 'react'
import { Document, Page, View } from '@react-pdf/renderer'
import { Provider } from 'react-redux'

import store from '../../../store/store'
import MainContext from '../../../pages/_document'

import Header from '../Header'
import Skills from '../Skills'
import Links from '../Links'
import Details from '../Details'
import Languages from '../Languages'
import Hobbies from '../Hobbies'
import GDPA from '../GDPA'
import Spacer from '../Spacer'
import Education from '../Education'
import Experience from '../Experience'
import Certificates from '../Certificates'
import Projects from '../Projects'

import styles from '../../../../styles/pdf/templates/upeksa/styles'
import headerStyles from '../../../../styles/pdf/templates/upeksa/headerStyles'
import detailsStyles from '../../../../styles/pdf/templates/upeksa/detailsStyles'
import skillsStyles from '../../../../styles/pdf/templates/upeksa/skillsStyles'
import hobbiesStyles from '../../../../styles/pdf/templates/upeksa/hobbiesStyles'
import experienceStyles from '../../../../styles/pdf/templates/upeksa/experienceStyles'
import languagesStyles from '../../../../styles/pdf/templates/upeksa/languagesStyles'
import educationStyles from '../../../../styles/pdf/templates/upeksa/educationStyles'
import linksStyles from '../../../../styles/pdf/templates/upeksa/linksStyles'
import gdpaStyles from '../../../../styles/pdf/templates/upeksa/gdpaStyles'
import certificatesStyles from '../../../../styles/pdf/templates/upeksa/certificatesStyles'
import projectsStyles from '../../../../styles/pdf/templates/upeksa/projectsStyles'

export default class Upeksa extends React.Component {
  render() {
    return (
      <Provider store={store} context={MainContext}>
        <Document>
          <Page style={styles.page}>
            <View style={styles.header} fixed></View>
            <View style={styles.contents}>
              <View style={styles.leftColumn}>
                <Details context={MainContext} style={detailsStyles} emptyHeader />
              </View>
              <View style={styles.middleColumnLeft}></View>
              <View style={styles.middleColumnRight}></View>
              <View style={styles.rightColumn}>
                <Header context={MainContext} style={headerStyles} />
              </View>
            </View>
            <Spacer size='20.5mm'> </Spacer>
            <View style={styles.contents}>
              <View style={styles.leftColumn}>
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
                <Certificates style={certificatesStyles} context={MainContext} />
                <Projects style={projectsStyles} context={MainContext} />

                <GDPA style={gdpaStyles} context={MainContext} />
              </View>

            </View>
            {/* <View>
              <View style={styles.footerColumn}>
                <Text> </Text>
              </View>
            </View>
            <View style={styles.footer} fixed>
              <Text> </Text>
            </View> */}
          </Page>
        </Document>
      </Provider >
    )
  }
}

