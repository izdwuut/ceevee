import * as React from 'react';
import PDFViewer from '../../pdf/PDFViewer'
import PDF from '../../pdf/templates/PDF'
import styles from '../../../styles/GenerateCV.css'
import { Form, TextArea, Container, Header, Accordion, Icon, Input } from 'semantic-ui-react'
import Summary from '../Summary';
import Skills from '../Skills'

export default class GenerateCV extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      summaryProps: {}
    };
  }

  // TODO: merge props
  headerProps = { header1: "John Kowalski", header2: "Junior Programmer" }
  summaryProps = { originalHeader: 'Summary', header: 'Summary', contents: '' }

  handleChange(event) {
    this.summaryProps.contents = event.target.value
    this.setState({
      summaryProps: this.summaryProps
    })
  }

  render() {

    return (
      <div className="container">
        <div className="ui" style={styles.ui}>
          <Summary header="Summary" contents="Lorem ipsum"/>
          <Skills/>
        </div>
        <PDFViewer template={<PDF header={this.headerProps} summary={this.state.summaryProps} />} summary={this.state.summaryProps} />
      </div>
    )
  }
}
