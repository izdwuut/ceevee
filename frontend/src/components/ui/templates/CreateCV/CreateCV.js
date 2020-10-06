import * as React from 'react';
import PDFViewer from '../../../pdf/PDFViewer/PDFViewer'
import styles from './CreateCV.css'
import Skills from '../../Skills'
import MetaData from '../../MetaData';
import Hobbies from '../../Hobbies';
import Experience from '../../Experience'
import MainContext from '../../../../CreateCVApp';
import Languages from '../../Languages';

export default class CreateCV extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="ui" style={styles.ui}>
          <MetaData context={MainContext} />
          <Skills context={MainContext} />
          <Hobbies context={MainContext} />
          <Experience context={MainContext} />
          <Languages context={MainContext} />
        </div>
        <PDFViewer context={MainContext} />
      </div>
    )
  }
}
