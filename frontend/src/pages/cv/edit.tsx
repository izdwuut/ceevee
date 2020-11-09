import * as React from 'react';
import {
  Icon,
  PageHeader,
} from '@salesforce/design-system-react';

import Viewer from 'src/components/pdf/viewer/Viewer'
import Skills from 'src/components/cv/edit/Skills'
import Details from 'src/components/cv/edit/Details';
import Hobbies from 'src/components/cv/edit/Hobbies';
import Experience from 'src/components/cv/edit/Experience'
import Languages from 'src/components/cv/edit/Languages';
import Education from 'src/components/cv/edit/Education';
import Links from 'src/components/cv/edit/Links';
import GDPA from 'src/components/cv/edit/GDPA';
import Certificates from 'src/components/cv/edit/Certificates';
import Projects from 'src/components/cv/edit/Projects';
import Header from 'src/components/Header'

import styles from 'styles/cv/Edit.module.css'

export default class CreateCV extends React.Component {
  render() {

    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.uiContainer}>
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
            info={<div className={styles.description}>
              Our core functionality - creating CVs. Here you have access to various components, like your personal details, work experience, education, and more. When something is not being used, it doesn't display on a generated document. By default, the preview is pretty much empty. That's because it fills with content as you update the form.
            <br /><br />
            You have an option to download the generated document in two formats: PDF and text (for accessibility).
          </div>}
            truncate
            variant="object-home"
          />
          <Details />
          <Experience />
          <Education  />
          <Skills />
          <Languages  />
          <Links />
          <Certificates  />
          <Hobbies  />
          <Projects  />
          <GDPA />
        </div>

        <div className={styles.pdfContainer}>
          <Viewer  />
        </div>
      </div>
    )
  }
}

