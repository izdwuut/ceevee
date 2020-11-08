
import React from 'react';
import { pdf } from '@react-pdf/renderer'
import { Document, Page, pdfjs, } from 'react-pdf'
import { connect } from 'react-redux'
import { CSSTransition } from "react-transition-group"
import {
  Button,
} from '@salesforce/design-system-react';
import { bindActionCreators } from 'redux'

import Upeksa from '../templates/Upeksa'
import * as Actions from 'src/store/reducers/components/pdf/viewer/actions'
import * as UI from 'src/utilities/ui'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export class Viewer extends React.Component {
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
    pdf(<Upeksa />).toBlob().then((blob) => {
      const url = URL.createObjectURL(new Blob([blob], {
        type:
          'application/pdf'
      }))
      if (!this.props.pdfViewer.previousBlob) {
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
    if (this.props.pdfViewer.update) {
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
    setTimeout(() => this.props.updatePreviousBlob(this.props.pdfViewer.nextBlob), this.timeout)
  }

  onPdfLoadSuccess(pdf) {
    this.setState({
      numberOfPages: pdf.numPages,
      width: pdf.width,
      height: pdf.height
    })
  }

  handleDownload = (e) => {
    const fileName = 'file'
    console.log(e)
    switch (e.value) {
      case 'pdf':
        this.downloadCV(fileName + '.pdf', this.props.pdfViewer.nextBlob)
        break;
      case 'text':
        this.downloadCV(fileName + '.txt', this.getText())
        break;
    }
  }

  downloadCV = (fileName, file) => {
    let anchor = document.createElement('a');
    anchor.setAttribute('href', file);
    anchor.setAttribute('download', fileName);

    anchor.style.display = 'none';
    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
  }

  getText = () => {
    let experience = []
    this.props.experience.experience.forEach((entry) => {
      const exp =
        `Position: ${entry.position}
Company: ${entry.company}
City: ${entry.city}
Country: ${entry.country}
From: ${entry.fromDateString}
To: ${entry.toDateString}
Description: ${entry.description}
`
      experience.push(exp)
    })

    let education = []
    this.props.education.education.forEach((entry) => {
      const edu =
        `Course: ${entry.course}
School: ${entry.school}
Title: ${entry.title}
City: ${entry.city}
Country: ${entry.country}
From: ${entry.from}
To: ${entry.to}
Description: ${entry.description}
`
      education.push(edu)
    })

    let skills = []
    this.props.skills.skills.forEach((entry) => {
      const skill =
        `Skill: ${entry.skill}
Description: ${entry.description}
`
      skills.push(skill)
    })

    let languages = []
    this.props.languages.languages.forEach((entry) => {
      const language =
        `${entry.language}
`
      languages.push(language)
    })

    let links = []
    this.props.links.links.forEach((entry) => {
      const link =
        `Label: ${entry.label}
Link: ${entry.link}
`
      links.push(link)
    })

    let certificates = []
    this.props.certificates.certificates.forEach((entry) => {
      const certificate =
        `Certificate: ${entry.certificate} 
Issuer: ${entry.issuer}
Valid until: ${entry.validUntilString}
`
      certificates.push(certificate)
    })

    let hobbies = []
    this.props.hobbies.hobbies.forEach((entry) => {
      const hobby =
        `${entry}`
      hobbies.push(hobby)
    })

    let projects = []
    this.props.projects.projects.forEach((entry) => {
      const project =
        `Project: ${entry.project}
Company: ${entry.company}
City: ${entry.city}
Country: ${entry.country}
Position: ${entry.position}
From: ${entry.fromDateString}
To: ${entry.toDateString}
Description: ${entry.description}
`
      projects.push(project)
    })

    let downloadText =
      `---
Header
---
First name: ${this.props.details.firstName}
Middle name: ${this.props.details.middleName}
Last name: ${this.props.details.lastName}
Position: ${this.props.details.position}

---
Details
---
E-mail: ${this.props.details.email}
Mobile: ${this.props.details.mobile}
Country: ${this.props.details.country}
City: ${this.props.details.city}
Driving license: ${this.props.details.drivingLicense}
Birth date: ${this.props.details.birthDate}

---
Experience
---
${experience.join('\n')}

---
Education
---
${education.join('\n')}

---
Skills
---
${skills.join('\n')}

---
Links
---
${links.join('\n')}

---
Certificates
---
${certificates.join('\n')}

---
Hobbies
---
${hobbies.join('\n')}

---
Projects
---
${projects.join('\n')}

---
GDPA
---
${this.props.gdpa.gdpa}
`

    return URL.createObjectURL(new Blob([downloadText], {
      type:
        'application/text'
    }))
  }
  render() {
    return (



      <div className="pdf">
        <div className="actions-top">
          <Button
            iconCategory="utility"
            iconName="chevronleft"
            iconPosition="left"
            disabled={!this.state.isPreviousPage}

            onClick={this.setIsPreviousPage}
            label="Previous page"
          />
          {UI.getDownload((event) => this.handleDownload(event))}

          <Button
            iconCategory="utility"
            iconName="chevronright"
            iconPosition="right"
            onClick={this.setIsNextPage}
            disabled={!this.state.isNextPage}
            label="Next page"
          />
        </div>

        <Document
          className="previous-pdf"
          file={this.props.pdfViewer.previousBlob}
          loading=''
          onLoadSuccess={this.onPdfLoadSuccess}>
          <Page
            pageNumber={this.state.activePage}
            loading=''
            renderMode="canvas"

          />
        </Document>


        <CSSTransition
          in={this.state.isPdfIn}
          timeout={this.timeout}
          classNames="my-node"
        >

          <Document
            className="next-pdf"
            file={this.props.pdfViewer.nextBlob}
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
  console.log(state)
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePreview: bindActionCreators(Actions.updatePreview, dispatch),
    updateNextBlob: bindActionCreators(Actions.updateNextBlob, dispatch),
    updatePreviousBlob: bindActionCreators(Actions.updatePreviousBlob, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Viewer);
