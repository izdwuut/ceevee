import React from 'react';
import PDF from './components/pdf/templates/PDF'
import styles from './App.css';
import UI from './components/ui/UI'
import { pdfjs } from 'react-pdf'
import { pdf } from '@react-pdf/renderer'
import { Document, Page } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      base64: '',
      blob: null
    }
    this.getBase64 = this.getBase64.bind(this);
  }

  getBase64(template) {
    var reader = new FileReader();
    pdf(template).toBlob().then((blob) => {
      this.blob = blob
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        this.setState({
          base64: reader.result
        })
      }
    })
  }

  componentDidMount() {
    this.getBase64(<PDF />)
  }

  componentDidUpdate() {
    console.log(this.state.base64)
  }

  render() {
    return (
      <div className="container">
        <div className="ui" style={styles.ui}>
          <UI />
        </div>
        <div className="pdf">
          <Document file={`${this.state.base64}`}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>

    )
  }
}

