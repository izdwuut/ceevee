import * as React from 'react';
import PDFViewer from '../../../pdf/PDFViewer/PDFViewer'
import styles from './CreateCV.css'
import Skills from '../../Skills'
import MetaData from '../../MetaData';
import Hobbies from '../../Hobbies';
import Experience from '../../Experience'
import MainContext from '../../../../CreateCVApp';
import Languages from '../../Languages';
import Education from '../../Education';

export default class CreateCV extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="ui" style={styles.ui}>
          <MetaData context={MainContext} />
          <Experience context={MainContext} />
          <Skills context={MainContext} />
          <Languages context={MainContext} />
          <Hobbies context={MainContext} />
          <Education context={MainContext} />
        </div>
        <PDFViewer context={MainContext} />
      </div>
    )
  }
}
