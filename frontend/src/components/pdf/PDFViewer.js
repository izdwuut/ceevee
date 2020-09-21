import React from 'react';
import PDF from './templates/PDF'
import { pdf } from '@react-pdf/renderer'
import { Document, Page, pdfjs } from 'react-pdf'
import styles from '../../styles/PDFViewer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PDFViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blob: null,
    }
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
    this.getBlob(this.props.template)
  }


  render() {
    return (
      <div className="pdf" style={styles.pdf}>
        <Document file={`${this.state.blob}`} renderMode="svg" >
          <Page pageNumber={1} />
        </Document>
      </div>
    )
  }
}

