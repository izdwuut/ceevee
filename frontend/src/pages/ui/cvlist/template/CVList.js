import * as React from 'react';
import MainContext from '../../../../index';

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
import { connect } from 'react-redux'
import Header from '../../components/header/Header'


export default class CVList extends React.Component {
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
        </div>

      </div>
    )
  }
}

