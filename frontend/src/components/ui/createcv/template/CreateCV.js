import * as React from 'react';
import PDFViewer from '../../../pdf/PDFViewer/PDFViewer'
import styles from './CreateCV.css'
import Skills from '../Skills'
import Details from '../Details';
import Hobbies from '../Hobbies';
import Experience from '../Experience'
import MainContext from '../../../../CreateCVApp';
import Languages from '../Languages';
import Education from '../Education';
import Links from '../Links';
import GDPA from '../GDPA';
import Certificates from '../Certificates';
import Projects from '../Projects';
import './CreateCV.css'
import { SizeMe } from 'react-sizeme'


export default class CreateCV extends React.Component {
  render() {

    return (
      <div className="container">
        <div className="ui-container" style={styles.ui}>
          <Details context={MainContext} />
          <Experience context={MainContext} />
          <Education context={MainContext} />
          <Skills context={MainContext} />
          <Languages context={MainContext} />
          <Links context={MainContext} />
          <Certificates context={MainContext} />
          <Hobbies context={MainContext} />
          <Projects context={MainContext} />
          <GDPA context={MainContext} />
        </div>

        <SizeMe
          monitorHeight
          refreshRate={32}
          render={({ size }) =>
            <div className="pdf-container" style={styles.pdf}>
              <PDFViewer context={MainContext} size={size} />
            </div>
          }
        />

      </div>
    )
  }
}
