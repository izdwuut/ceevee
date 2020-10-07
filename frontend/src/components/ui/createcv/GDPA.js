import MainContext from '../../../CreateCVApp';
import * as React from 'react';
import { Form, Segment, Header, TextArea } from 'semantic-ui-react'
import { updateGdpa } from '../../../redux/reducers/ui/gdpa/actions'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { connect } from "react-redux";
import { debounceTime } from '../../../utilities/variables'
import debounce from '../../../utilities/debounce'

export class GDPA extends React.Component {
    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateGdpa = (e) => {
        this.props.updateGdpa(e)
        this.updatePreview()
    }
    render() {
        return (
            <Segment>
                <Header>{this.props.header}</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                <Form>
                    <Form.Field
                        control={TextArea}
                        label='Description'
                        value={this.props.gdpa}
                        onChange={e => this.updateGdpa(e.target.value)}
                    />
                </Form>
            </Segment>
        )
    }
}

const mapStateToProps = state => {
    return state.gdpa
}

export default connect(
    mapStateToProps,
    { updateGdpa, updatePreview },
    null,
    { context: MainContext }
)(GDPA);