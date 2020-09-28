import * as React from 'react';
import PDFViewer from '../../pdf/PDFViewer'
import styles from '../../../styles/GenerateCV.css'
import Summary from '../Summary';
import Skills from '../Skills'
import MetaData from '../MetaData';

export default class GenerateCV extends React.Component {
  render() {

    return (
      <div className="container">
        <div className="ui" style={styles.ui}>
          <MetaData onChange={e => console.log(e)}/>
          <Summary />
          <Skills />
        </div>
        {/* <PDFViewer /> */}
      </div>
    )
  }
}
