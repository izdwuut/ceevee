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
    state = {
        toasts: []
    }

    componentDidUpdate(prevProps, prevState) {
        const lastElement = this.props.toasts.length - 1
        if (this.props.toasts.length === 0 || this.props.toasts[lastElement] === null) {
            return
        }
        this.state.toasts.push(
            <Toast
                labels={{
                    heading: this.props.toasts[lastElement].heading,
                }}
                variant={this.props.toasts[lastElement].variant}

            />
        )
        this.hideToast(lastElement)
    }
    
    // We override default Toast behaviour (the duration parameter),
    // because as of now it doesn't work properly for multiple toasts.
    hideToast = (id) => {
        this.props.hideToast(id)
        setTimeout(() => {
            this.setState({
                toasts: this.removeToast(id)
            })
        }, Variables.toastDuration)
    }
    removeToast = (id) => {
        const toastsCopy = [...this.state.toasts]
        toastsCopy[id] = null

        return toastsCopy
    }

    render() {
        return (
            <ToastContainer>
                {this.state.toasts}
            </ToastContainer>
        )
    }
}

const mapStateToProps = state => {
    return state.toasts
}

const mapDispatchToProps = dispatch => {
    return {
        hideToast: (id) => dispatch(Actions.hideToast(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Toasts)