
import React from 'react';
import { pdf } from '@react-pdf/renderer'
import { Document, Page, pdfjs, } from 'react-pdf'
import { connect, ConnectedProps, AnyAction } from 'react-redux'
import { CSSTransition } from "react-transition-group"
import {
  Button,
} from '@salesforce/design-system-react';
import { bindActionCreators, Dispatch } from 'redux'

import viewer from 'styles/components/pdf/Viewer'
import Upeksa from '../templates/Upeksa'
import * as Actions from 'src/store/reducers/components/pdf/viewer/actions'
import * as UI from 'src/utilities/ui'
import { RootState } from 'src/store/reducers';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const mapStateToProps = (state: RootState): RootState => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    updatePreview: bindActionCreators(Actions.updatePreview, dispatch),
    updateNextBlob: bindActionCreators(Actions.updateNextBlob, dispatch),
    updatePreviousBlob: bindActionCreators(Actions.updatePreviousBlob, dispatch)
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
)

type Props = ConnectedProps<typeof connector>

type LocalState = {
  activePage: number,
  numberOfPages: number,
  isNextPage: boolean,
  isPreviousPage: boolean,
  isPdfIn: boolean
}
class Viewer extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.setIsNextPage = this.setIsNextPage.bind(this)
    this.setIsPreviousPage = this.setIsPreviousPage.bind(this)
    this.onPdfRenderSuccess = this.onPdfRenderSuccess.bind(this)
    this.onPdfLoadSuccess = this.onPdfLoadSuccess.bind(this)
  }
  state: LocalState = {
    activePage: 1,
    numberOfPages: 0,
    isNextPage: false,
    isPreviousPage: false,
    isPdfIn: false
  }
  timeout: number = 2000

  getBlob():void {
    pdf(<Upeksa />).toBlob().then((blob) => {
      const url: string = URL.createObjectURL(new Blob([blob], {
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

  componentDidUpdate(prevProps:Props, prevState:LocalState) {
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

  setIsNextPage():void {
    const activePage:number = this.state.activePage
    this.setState({
      activePage: this.isNextPage() ? activePage + 1 : activePage
    })
  }

  setIsPreviousPage():void {
    this.setState({
      activePage: this.isPreviousPage() ? this.state.activePage - 1 : this.state.activePage
    })
  }

  isNextPage():boolean {
    return this.state.activePage < this.state.numberOfPages
  }

  isPreviousPage():boolean {
    return this.state.activePage > 1
  }

  onPdfRenderSuccess():void {
    setTimeout(():void => this.props.updatePreviousBlob(this.props.pdfViewer.nextBlob), this.timeout)
  }

  onPdfLoadSuccess(pdf:any):void {
    this.setState({
      numberOfPages: pdf.numPages,
      width: pdf.width,
      height: pdf.height
    })
  }

  handleDownload = (type:string):void => {
    const fileName = 'file'
    switch (type) {
      case 'pdf':
        this.downloadCV(fileName + '.pdf', this.props.pdfViewer.nextBlob)
        break;
      case 'text':
        this.downloadCV(fileName + '.txt', this.getText())
        break;
    }
  }

  downloadCV = (fileName:string, file:string):void => {
    let anchor: HTMLAnchorElement = document.createElement('a');
    anchor.setAttribute('href', file);
    anchor.setAttribute('download', fileName);

    anchor.style.display = 'none';
    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
  }

  getText = ():string => {
    let experience: Array<string> = []
    this.props.experience.experience.forEach((entry):void => {
      const exp:string =
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

    let education: Array<string> = []
    this.props.education.education.forEach((entry):void => {
      const edu:string =
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

    let skills: Array<string> = []
    this.props.skills.skills.forEach((entry):void => {
      const skill:string =
        `Skill: ${entry.skill}
Description: ${entry.description}
`
      skills.push(skill)
    })

    let languages: Array<string> = []
    this.props.languages.languages.forEach((entry):void => {
      const language:string =
        `${entry.language}
`
      languages.push(language)
    })

    let links: Array<string> = []
    this.props.links.links.forEach((entry):void => {
      const link:string =
        `Label: ${entry.label}
Link: ${entry.link}
`
      links.push(link)
    })

    let certificates: Array<string> = []
    this.props.certificates.certificates.forEach((entry):void => {
      const certificate:string =
        `Certificate: ${entry.certificate} 
Issuer: ${entry.issuer}
Valid until: ${entry.validUntilString}
`
      certificates.push(certificate)
    })

    let hobbies: Array<string> = []
    this.props.hobbies.hobbies.forEach((entry):void => {
      const hobby:string =
        `${entry}`
      hobbies.push(hobby)
    })

    let projects: Array<string> = []
    this.props.projects.projects.forEach((entry):void => {
      const project:string =
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

    const downloadText:string =
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
  render():JSX.Element {
    return (
      <div className="pdf" css={viewer}>
        <div className="actions-top">
          <Button
            iconCategory="utility"
            iconName="chevronleft"
            iconPosition="left"
            disabled={!this.state.isPreviousPage}
            onClick={this.setIsPreviousPage}
            label="Previous page"
          />
          {UI.getDownload((e):void => this.handleDownload(e.value))}
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

export default connector(Viewer)
