import React from 'react';
import { pdf, BlobProvider } from '@react-pdf/renderer'
import { Document, Page, pdfjs, } from 'react-pdf'
import styles from '../../styles/PDFViewer.css'
import { Button } from 'semantic-ui-react'
import equal from 'fast-deep-equal'
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PDFViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blob: null,
      activePage: 1,
      numberOfPages: 0,
      isNextPage: false,
      isPreviousPage: false
    }

    this.setIsNextPage = this.setIsNextPage.bind(this)
    this.setIsPreviousPage = this.setIsPreviousPage.bind(this)
    this.setNumberOfPages = this.setNumberOfPages.bind(this)
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
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.numberOfPages != this.state.numberOfPages || prevState.activePage != this.state.activePage || this.props != prevProps) {
      this.setState({
        isNextPage: this.isNextPage(),
        isPreviousPage: this.isPreviousPage()
      })
    }
    if (!equal(prevProps, this.props)) {
      this.getBlob(this.props.template)
    }
  }

  setIsNextPage() {
    const activePage = this.state.activePage
    this.setState({
      activePage: this.isNextPage() ? activePage + 1 : activePage
    })
  }

  setIsPreviousPage() {
    this.setState({
      activePage: this.isPreviousPage() ? this.state.activePage - 1 : this.state.activePage
    })
  }

  isNextPage() {
    return this.state.activePage < this.state.numberOfPages
  }

  isPreviousPage() {
    return this.state.activePage > 1
  }

  setNumberOfPages(pdf) {
    this.setState({
      numberOfPages: pdf.numPages
    })

  }

  render() {
    return (

      <div className="pdf" style={styles.pdf}>
        <Button onClick={this.setIsPreviousPage} className={`${this.state.isPreviousPage ? 'enabled' : 'disabled'}`}>left</Button>
        <Button onClick={this.setIsNextPage} className={`${this.state.isNextPage ? 'enabled' : 'disabled'}`}>right</Button>

        <Document file={this.state.blob} onLoadSuccess={this.setNumberOfPages}>
          <Page pageNumber={this.state.activePage} />
        </Document>
      </div>
    )
  }
}

