import MainContext from '../../CreateCVApp';
import * as React from 'react';
import { Form } from 'semantic-ui-react'
import { updateFirstName } from '../../redux/actions/ui/metaData/actions'
import {updatePreview} from '../../redux/actions/pdf/pdfViewer/actions'
import { connect } from "react-redux";
import debounce from '../../utilities/debounce'

export class MetaData extends React.Component {
    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, 2500)

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
                <Form.Input label='E-mail' type='text' />
                <Form.Input label='Mobile' type='text' />
                <Form.Input label='Country' type='text' />
                <Form.Input label='City' type='text' />
                <Form.Input label='Adress' type='text' />
                <Form.Input label='Driving license' type='text' />
                <Form.Input label='Birth date' type='text' />
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