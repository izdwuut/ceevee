import MainContext from '../../../index';
import * as React from 'react';

import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { connect } from "react-redux";
import { debounceTime } from '../../../utilities/variables'
import debounce from '../../../utilities/debounce'

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
import * as UI from '../../../utilities/ui'

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
            >
                <div class="slds-grid slds-wrap">
                    <div class="slds-col slds-size_6-of-12">
                        <img src="/preview-icon.png" alt="CV preview" className="cv-preview" />
                    </div>
                    {/* float right */}
                    <div class="slds-col cv-actions slds-size_6-of-12">
                        <Button
                            label="Rename CV"
                            iconCategory="utility"
                            iconName="edit"
                            iconPosition="left"
                        />
                        <Button
                            label="Edit CV"
                            iconCategory="utility"
                            iconName="edit_form"
                            iconPosition="left"
                        />
                        <Button
                            label="Clone CV"
                            iconCategory="utility"
                            iconName="copy"
                            iconPosition="left"
                        />
                        {UI.getDownload()}
                        <Button
                            label="Delete CV"
                            iconCategory="utility"
                            iconName="delete"
                            iconPosition="left"
                            variant="destructive"
                        />
                    </div>
                </div>
            </Card>
        )
    }
}