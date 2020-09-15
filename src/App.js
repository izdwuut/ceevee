import React from 'react';
import { render } from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from './components/PDF'

export default class App extends React.Component{
  render() {
    return (
     <PDFViewer>
      <PDF/>
    </PDFViewer >
  )}
}

render(<App />, document.getElementById('root'));
