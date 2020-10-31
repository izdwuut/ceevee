import * as React from 'react';
import PDFViewer from '../../../pdf/PDFViewer/PDFViewer'
import styles from './CreateCV.css'
import Skills from '../Skills'
import Details from '../Details';
import Hobbies from '../Hobbies';
import Experience from '../Experience'
import MainContext from '../../../../CreateCVApp';
import Languages from '../Languages';
import Education from '../Education';
import Links from '../Links';
import GDPA from '../GDPA';
import Certificates from '../Certificates';
import Projects from '../Projects';
import './CreateCV.css'
import { SizeMe } from 'react-sizeme'
import Header from '../../components/header/Header'

import {
    Icon,
    InputIcon,
    Button,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    Tooltip,
    Textarea,
    CardEmpty,
    PageHeader,
    
} from '@salesforce/design-system-react';

export default class CreateCV extends React.Component {
  render() {

    return (
      <div className="container">
        <Header />
        <div className="ui-container">
        <PageHeader
					icon={
						<Icon
							assistiveText={{
								label: 'CV',
							}}
							category="doctype"
							name="unknown"
							style={{
								
								fill: '#ffffff',
							}}
							title="CV"
						/>
          }
          className="page-header"
					title="Create CV"
          info={<div className="description">
            Our core functionality - creating CVs. Here you have access to various components, like your personal details, work experience, education, and more. When something is not being used, it doesn't display on a generated document. By default, the preview is pretty much empty. That's because it fills with content as you update the form.
            <br /><br />
            You have an option to download the generated document in two formats: PDF and text (for accessibility).
          </div>}
					truncate
					variant="object-home"
				/>
          <Details context={MainContext} />
          <Experience context={MainContext} />
          <Education context={MainContext} />
          <Skills context={MainContext} />
          <Languages context={MainContext} />
          <Links context={MainContext} />
          <Certificates context={MainContext} />
          <Hobbies context={MainContext} />
          <Projects context={MainContext} />
          <GDPA context={MainContext} />
        </div>

        <SizeMe
          monitorHeight
          refreshRate={32}
          render={({ size }) =>
            <div className="pdf-container" style={styles.pdf}>
              <PDFViewer context={MainContext} size={size} />
            </div>
          }
        />

      </div>
    )
  }
}
