import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from './components/pdf/templates/PDF'
import styles from './App.css';
import UI from './components/ui/UI'
import ReactPDF from '@react-pdf/renderer';
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="ui" style={styles.ui}>
          <UI />
        </div>
        <div className="pdf">
          <PDFViewer style={styles.pdf} className="pdf">
            <PDF />
          </PDFViewer >
        </div>
      </div>

    )
  }
}

ReactPDF.render(<App />, `${__dirname}/example.pdf`);