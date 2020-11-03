import * as React from 'react';
import { connect } from "react-redux"
import MainContext from '../../../../index'
import debounce from '../../../../utilities/debounce'
import { updatePreview } from '../../../../redux/reducers/pdf/pdfViewer/actions'
import { debounceTime } from '../../../../utilities/variables'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../../../redux/reducers/ui/createcv/certificates/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { datepickerDateFormat } from '../../../../utilities/variables'
import * as UI from '../../../../utilities/ui'
import PropTypes from 'prop-types';

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
    Modal
} from '@salesforce/design-system-react';


export class DeleteItem extends React.Component {
    state = {
        isDeleteConfirmationOpen: false
    };

    toggleDeleteConfirmation = () => {
        this.setState({ isDeleteConfirmationOpen: !this.state.isDeleteConfirmationOpen });
    };

    deleteItem = () => {
        this.props.onDelete()
        this.toggleDeleteConfirmation()
    }

    render() {

        return (
            <div>
                <Button
                    assistiveText={{ icon: 'Delete' }}
                    label="Delete"
                    iconCategory="action"
                    iconName="delete"
                    iconSize="small"
                    iconVariant="bare"
                    colorVariant="error"
                    onClick={this.toggleDeleteConfirmation}
                    variant="icon"
                />
                <Modal
                    footer={[

                        <Button

                            variant="destructive"
                            onClick={this.deleteItem}


                            label="Delete"
                            iconCategory="action"
                            iconName="delete"
                            iconPosition="left"
                        />,
                        <Button
                            key="promptBtn"
                            label="Cancel"
                            onClick={this.toggleDeleteConfirmation}
                        />,
                    ]}
                    isOpen={this.state.isDeleteConfirmationOpen}
                    onRequestClose={this.toggleDeleteConfirmation}
                    prompt="warning"

                    title={<span>{this.props.title}</span>}
                >
                    <div className="slds-m-around_medium">
                        Are you sure you want to delete "{this.props.item}"?
                    </div>
                </Modal>
                {/* <ToastContainer>
					<Toast
						labels={{
							heading: [
								'Account ',
								<a key="acme-100" href="javascript:void(0);">
									ACME - 100
								</a>,
								' widgets was created.',
							],
						}}
						variant="success"
					/>
				</ToastContainer> */}
            </div>
        )

    }
}
