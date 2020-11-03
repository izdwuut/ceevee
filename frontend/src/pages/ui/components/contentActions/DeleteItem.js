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

import { showModal } from 'redux/reducers/ui/components/modal/actions'
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
    CardEmpty
} from '@salesforce/design-system-react';


export class DeleteItem extends React.Component {

    showModal = () => {
        this.props.showModal(this.props.onDelete, this.props.title, this.props.item, true, 'warning', 'destructive')
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
                    onClick={this.showModal}
                    variant="icon"
                />
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

const mapDispatchToProps = dispatch => {
    return {
        showModal: (action, title, item, isDelete, modalType, actionButtonVariant) => dispatch(showModal(action, title, item, isDelete, modalType, actionButtonVariant))
    }
}

export default connect(
    null,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(DeleteItem)