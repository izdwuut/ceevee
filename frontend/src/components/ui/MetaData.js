import MainContext from '../../CreateCVApp';
import * as React from 'react';
import { Form, TextArea, Container, Accordion, Icon, Input } from 'semantic-ui-react'
import { updateFirstName } from '../../redux/actions/ui/metaData/actions'
import {updatePreview} from '../../redux/actions/pdf/pdfViewer/actions'
import { connect } from "react-redux";

export class MetaData extends React.Component {
    updatePreview = this.debounce(() => {
        this.props.updatePreview(true)
    }, 1000)
    debounce(func, wait) {
        let timeout;

        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    updateFirstName(e) {
        this.props.updateFirstName(e.target.value)
        this.updatePreview()
    }
    render() {
        return (
            <Form>
                <Form.Input label='Name' type='text' onChange={e => this.updateFirstName(e)} value={this.props.firstName} />
                <Form.Input label='Second name' type='text' />
                <Form.Input label='Last name' type='text' />
                <Form.Input label='Position' type='text' />
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return state.metaData
}

export default connect(
    mapStateToProps,
    { updateFirstName, updatePreview },
    null,
    { context: MainContext}
)(MetaData);