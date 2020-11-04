import * as React from 'react';
import { connect } from "react-redux"
import MainContext from '../../../index'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
import * as Actions from '../../../redux/reducers/ui/components/modal/actions'

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
    Modal as SLDSModal
} from '@salesforce/design-system-react';


export class Modal extends React.Component {
    hideModal = () => {
        this.props.hideModal()
    }
    confirmAction = () => {
        this.props.action()
        this.hideModal()
    }
    render() {
        return (
            <SLDSModal
                footer={[
                    this.props.isDelete ?
                        <Button
                            variant="destructive"
                            onClick={this.confirmAction}
                            label="Delete"
                        />
                        :
                        <Button
                            onClick={this.confirmAction}
                            label="Ok"
                        />,
                    <Button
                        key="promptBtn"
                        label="Cancel"
                        onClick={(e) => this.hideModal()}
                    />,
                ]}
                isOpen={this.props.isVisible}
                onRequestClose={this.hideModal}

                title={<span>{this.props.title}</span>}
            >
                <div className="slds-m-around_medium">
                    Are you sure you want to delete "{this.props.item}"?
                </div>
            </SLDSModal>

        )

    }
}


const mapStateToProps = state => {
    return state.modal
}

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(Actions.hideModal())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Modal)