import * as React from 'react';
import { connect } from "react-redux"
import MainContext from 'index'
import debounce from 'utilities/debounce'
import { updatePreview } from 'redux/reducers/pdf/pdfViewer/actions'

import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from 'redux/reducers/ui/components/toasts/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { datepickerDateFormat } from 'utilities/variables'
import * as UI from 'utilities/ui'
import PropTypes from 'prop-types';
import * as Variables from 'utilities/variables'

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
    CardEmpty,
    ToastContainer,
    Toast
} from '@salesforce/design-system-react';


export class Toasts extends React.Component {


    render() {
        let toasts = []

        for (let i = 0; i < this.props.toasts.length; i++) {
            toasts.push(
                <Toast
                    labels={{
                        heading: this.props.toasts[i].heading,
                    }}
                    variant={this.props.toasts[i].variant}
                    duration={Variables.toastDuration}
                    onRequestClose={() => this.props.hideToast(i)}
                />
            )
        }
        return (
            <ToastContainer>
                {toasts}
            </ToastContainer>
        )

    }
}

const mapStateToProps = state => {
    return state.toasts
}

const mapDispatchToProps = dispatch => {
    return {
        hideToast: () => dispatch(Actions.hideToast())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Toasts)