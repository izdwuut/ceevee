import MainContext from '../../../CreateCVApp';
import React from 'react';
import { pdf } from '@react-pdf/renderer'
import { Document, Page, pdfjs, } from 'react-pdf'
import styles from './PDFViewer.css'
import { Button } from 'semantic-ui-react'
import Test from '../templates/Test';
import { updatePreviousBlob, updateNextBlob, updatePreview } from '../../../redux/actions/pdf/pdfViewer/actions'
import { connect } from 'react-redux'
import { CSSTransition } from "react-transition-group";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export class PDFViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 1,
      numberOfPages: 0,
      isNextPage: false,
      isPreviousPage: false,
      isPdfIn: false
    }

    this.setIsNextPage = this.setIsNextPage.bind(this)
    this.setIsPreviousPage = this.setIsPreviousPage.bind(this)
    this.onPdfRenderSuccess = this.onPdfRenderSuccess.bind(this)
    this.onPdfLoadSuccess = this.onPdfLoadSuccess.bind(this)
  }

  timeout = 2000

  getBlob() {
    pdf(<Test />).toBlob().then((blob) => {
      const url = URL.createObjectURL(new Blob([blob], {
        type:
          'application/pdf'
      }))
      if (!this.props.previousBlob) {
        this.props.updatePreviousBlob(url)
      }
      setTimeout(() => {
        this.setState({
          isPdfIn: false
        })
        this.props.updateNextBlob(url)
        this.setState({
          isPdfIn: true
        })
      }, this.timeout)
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

  onPdfRenderSuccess() {
    setTimeout(() => this.props.updatePreviousBlob(this.props.nextBlob), this.timeout)
  }

  onPdfLoadSuccess(pdf) {
    this.setState({
      numberOfPages: pdf.numPages
    })
  }

  render() {
    return (

      <div className="pdf" style={styles.pdf}>
        <Button
          onClick={this.setIsPreviousPage}
          className={`${this.state.isPreviousPage ? 'enabled' : 'disabled'}`}
        >
          previous page
        </Button>
        <Button
          onClick={this.setIsNextPage}
          className={`${this.state.isNextPage ? 'enabled' : 'disabled'}`}
        >
          next page
        </Button>

        <Document
          className="previous-pdf"
          file={this.props.previousBlob}
          loading=''
          onLoadSuccess={this.onPdfLoadSuccess}>
          <Page pageNumber={this.state.activePage} loading='' renderMode="canvas" />
        </Document>
        <CSSTransition
          in={this.state.isPdfIn}
          timeout={this.timeout}
          classNames="my-node"
        >
          <Document
            className="next-pdf"
            file={this.props.nextBlob}
            loading=''
            noData=''
          >
            <Page
              pageNumber={this.state.activePage}
              renderMode="canvas"
              loading=''
              onRenderSuccess={this.onPdfRenderSuccess}
            />
          </Document>
        </CSSTransition>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.pdfViewer
}

export default connect(
  mapStateToProps,
  { updatePreviousBlob, updateNextBlob, updatePreview },
  null,
  { context: MainContext }
)(PDFViewer);
