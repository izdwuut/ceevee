import * as React from 'react';
import {
    Icon,
    Button,
    Card,
} from '@salesforce/design-system-react';

import * as UI from 'src/utilities/ui'
import classes from 'styles/components/cv/CV.module.sass'

export default class CV extends React.Component {
    render() {
        return (
            <Card
                heading="Lorem ipsum"

                icon={<Icon category="doctype" name="unknown" size="small" />}
                className={classes.cv}
            >
                <div className="slds-grid slds-wrap">
                    <div className="slds-col slds-size_6-of-12">
                        <img src="/preview-icon.png" alt="CV preview" className={classes.cvPreview} />
                    </div>
                    {/* float right */}
                    <div className={`slds-col slds-size_6-of-12 ${classes.cvActions}`}>
                        <Button
                            label="Rename CV"
                            iconCategory="utility"
                            iconName="edit"
                            iconPosition="left"
                            className={classes['slds-button']}
                        />
                        <Button
                            label="Edit CV"
                            iconCategory="utility"
                            iconName="edit_form"
                            iconPosition="left"
                            
                            className={classes['slds-button']}
                        />
                        <Button
                            label="Clone CV"
                            iconCategory="utility"
                            iconName="copy"
                            iconPosition="left"
                            
                            className={classes['slds-button']}
                        />
                        {UI.getDownload(null, classes['slds-button'], classes['slds-dropdown-trigger'])}
                        <Button
                            label="Delete CV"
                            iconCategory="utility"
                            iconName="delete"
                            iconPosition="left"
                            variant="destructive"
                            
                            className={classes['slds-button']}
                        />
                    </div>
                </div>
            </Card>
        )
    }
}