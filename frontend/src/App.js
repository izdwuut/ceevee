import React from 'react';
import PDF from './components/pdf/templates/PDF'
import styles from './App.css';
import UI from './components/ui/UI'
import { pdf } from '@react-pdf/renderer'
import { Document, Page,pdfjs  } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      base64: '',
      blob: null
    }
    this.getBase64 = this.getBlob.bind(this);
  }

  getBlob(template) {
    pdf(template).toBlob().then((blob) => {
      this.setState({
        blob: URL.createObjectURL(new Blob([blob], {
          type:
            'application/pdf'
        }))
      })

    })
  }

  componentDidMount() {
    this.getBlob(<PDF />)
  }

  render() {
    return (
      <div className="container">
        <div className="ui" style={styles.ui}>
          <UI />
        </div>
        <div className="pdf">
          <Document file={`${this.state.blob}`} >
            <Page pageNumber={1} renderMode="svg"/>
          </Document>
        </div>
      </div>
    )
  }
}

