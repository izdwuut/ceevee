import React from 'react';
import { render } from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from './components/PDF'
import styles from './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="ui"></div>
        <PDFViewer style={styles.pdf} className="pdf">
          <PDF />
        </PDFViewer >
      </div>
      
    )
  }
}

render(<App />, document.getElementById('root'));
