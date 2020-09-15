import React from 'react';
import { render } from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from './components/pdf/templates/PDF'
import styles from './App.css';
import UI from './components/ui/UI'
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <UI></UI>
        <PDFViewer style={styles.pdf} className="pdf">
          <PDF />
        </PDFViewer >
      </div>
      
    )
  }
}

render(<App />, document.getElementById('root'));
