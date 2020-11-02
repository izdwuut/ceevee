import MainContext from '../../../../../index';
import * as React from 'react';

import { updatePreview } from '../../../../../redux/reducers/pdf/pdfViewer/actions'
import { connect } from "react-redux";
import { debounceTime } from '../../../../../utilities/variables'
import debounce from '../../../../../utilities/debounce'

import {
    Dropdown,
    Icon,
    InputIcon,
    Button,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    Tooltip,
    Textarea,
    CardEmpty
} from '@salesforce/design-system-react';
import * as UI from '../../../../../utilities/ui'
import classes from './CV.module.css'

export class CV extends React.Component {

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateGdpa = (gdpa) => {
        this.props.updateGdpa(gdpa)
        this.updatePreview()
    }
    render() {
        return (
            <Card
                heading={this.props.header}

                icon={<Icon category="doctype" name="unknown" size="small" />}
                className={classes.cv}
            >
                <div class="slds-grid slds-wrap">
                    <div class="slds-col slds-size_6-of-12">
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