import * as React from 'react';
import PDFViewer from '../../pdf/PDFViewer'
import styles from '../../../styles/GenerateCV.css'
import Summary from '../Summary';
import Skills from '../Skills'
import MetaData from '../MetaData';
import MainContext from '../../../CreateCVApp';
export default class CreateCV extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="ui" style={styles.ui}>
          <MetaData context={MainContext} />
          <Summary />
          <Skills />
        </div>
        <PDFViewer context={MainContext} />
      </div>
    )
  }
}
