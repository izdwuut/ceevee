import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import CV from './components/comp'

const App = () => (
  <PDFViewer>
    <CV />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
