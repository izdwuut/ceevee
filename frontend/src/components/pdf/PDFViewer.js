import  MainContext  from '../../CreateCVApp';
import React from 'react';
import { pdf, BlobProvider } from '@react-pdf/renderer'
import { Document, Page, pdfjs, } from 'react-pdf'
import styles from '../../styles/PDFViewer.css'
import { Button } from 'semantic-ui-react'
import Test from './templates/Test';
import { updateBlob, updatePreview } from '../../redux/actions/pdf/pdfViewer/actions'
import { connect } from 'react-redux'
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export class PDFViewer extends React.Component {
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


  getBlob() {
    pdf(<Test />).toBlob().then((blob) => {
      this.props.updateBlob(URL.createObjectURL(new Blob([blob], {
        type:
          'application/pdf'
      })))
    })
  }

  componentDidMount() {
    this.getBlob()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.numberOfPages != this.state.numberOfPages || prevState.activePage != this.state.activePage || this.props != prevProps) {
      this.setState({
        isNextPage: this.isNextPage(),
        isPreviousPage: this.isPreviousPage()
      })
    }
    if (this.props.update) {
      this.getBlob()
      this.props.updatePreview(false)
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

        <Document file={this.props.blob} onLoadSuccess={this.setNumberOfPages} loading=''>
          <Page pageNumber={this.state.activePage} />
        </Document>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.pdfViewer
}

export default connect(
  mapStateToProps,
  { updateBlob, updatePreview },
  null,
  {context: MainContext}
  
)(PDFViewer);
