
import * as React from 'react';
import {
  Icon,
  Button,
  PageHeader,
  PageHeaderControl

} from '@salesforce/design-system-react';

import  CV  from 'src/components/cv/list/CV'
import classes from 'styles/pages/cv/List.module.sass'

export default class List extends React.Component {
  render() {
    return (
      <div className={classes.container} >
        <PageHeader
          icon={
            <Icon
              assistiveText={{
                label: 'CV',
              }}
              category="standard"
              name="picklist_type"
              style={{

                fill: '#ffffff',
              }}
              title="CV"
            />
          }
          className={classes.pageHeader}
          title="CV List"
          info={<div className={classes.description}>
            A list of CVs you've created. You can edit title, go to editing, clone, delete and download the documents.
              <br /><br />
              Next to each CV is a graphical representation of a PDF to be created. Because of it's size, it's a bit undecipherable, but we believe it's enough for a sneak peak. Once opened, the CV editing view provides a preview with more detail.
          </div>}
          truncate
          variant="object-home"
          onRenderActions={() => {
            return (
              <PageHeaderControl>
                <Button
                  label="Create new CV"
                  iconCategory="utility"
                  iconName="add"
                  iconPosition="left"
                />
              </PageHeaderControl>
            )
          }

          }
        />
        <div className={`slds-grid ${classes['slds-grid']}  slds-gutters ${classes.cvs} slds-wrap`}>
          <div className="slds-col slds-size_3-of-12">
            <CV />
          </div>
          <div className="slds-col slds-size_3-of-12">
            <CV />
          </div>
          <div className="slds-col slds-size_3-of-12">
            <CV />
          </div>
          <div className="slds-col slds-size_3-of-12">
            <CV />
          </div>
        </div>
      </div>

    )
  }
}

