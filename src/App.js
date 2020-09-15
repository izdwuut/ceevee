import React from 'react';
import { render } from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './components/MyDocument'

export default class App extends React.Component{
  render() {
    return (
     <PDFViewer>
      <MyDocument/>
    </PDFViewer >
  )}
}

render(<App />, document.getElementById('root'));
