import * as React from 'react';
import { connect } from "react-redux"
import MainContext from '../../../../index'
import debounce from '../../../../utilities/debounce'
import { updatePreview } from '../../../../redux/reducers/pdf/pdfViewer/actions'
import { debounceTime } from '../../../../utilities/variables'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../../../redux/reducers/ui/certificates/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { datepickerDateFormat } from '../../../../utilities/variables'
import * as UI from '../../../../utilities/ui'
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import * as Actions from '../../../redux/reducers/ui/components/modal/actions'
import MainContext from '../../../index'

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


export class Modal extends React.Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Modal
                footer={[
                    this.props.isDelete ?
                    <Button
                        variant="destructive"
                        onClick={this.props.action}
                        label="Delete"
                    />
                    :
                    <Button
                        onClick={this.props.action}
                        label="Ok"
                    />,
                    <Button
                        key="promptBtn"
                        label="Cancel"
                        onClick={this.toggleOpen}
                    />,
                ]}
                isOpen={this.state.isOpen}
                onRequestClose={this.toggleOpen}
                prompt={this.props.type}

                title={<span>{this.props.title}</span>}
            >
                <div className="slds-m-around_medium">
                    Are you sure you want to delete "{this.props.item}"?
                    </div>
            </Modal>

        )

    }
}


const mapStateToProps = state => {
    return state.modal
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      showModal: (action, title, item, isDelete = false, modalType='', actionButtonVariant='') => dispatch(Actions.showModal((action, title, item, isDelete = false, modalType='', actionButtonVariant=''))),
      hideModal: () => dispatch(Actions.hideModal())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
  )(Modal)