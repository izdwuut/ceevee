import * as React from 'react';
import {
    Button,
    Segment,
    Form,
    Input,
    TextArea,
    Header,
    Icon
} from 'semantic-ui-react'
import { connect } from "react-redux"
import MainContext from '../../CreateCVApp'
import debounce from '../../utilities/debounce'
import { updatePreview } from '../../redux/actions/pdf/pdfViewer/actions'
import { debounceTime } from '../../utilities/variables'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../redux/actions/ui/languages/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";





export class Languages extends React.Component {

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateLanguage = (id, language) => {
        this.props.updateLanguage(id, language)
        this.updatePreview()
    }

    deleteLanguage = id => {
        this.props.deleteLanguage(id)
        this.updatePreview()
    }

    addLanguage = () => {
        this.props.addLanguage()
        this.updatePreview()
    }

    render() {
        let languages = []
        for (let i = 0; i < this.props.languages.length; i++) {
            languages.push(
                <Segment>
                    <Form.Field
                        control={Input}
                        label='Language'
                        value={this.props.languages[i]}
                        onChange={e => this.updateLanguage(i, e.target.value)}
                    />
                    <Button onClick={() => this.deleteLanguage(i)}>
                        Delete
                        </Button>
                </Segment>
            )
        }

        return (
            <Segment>
                <Header>{this.props.header}</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                {languages.length > 0 &&
                    <Form>
                        {languages}
                    </Form>
                }

                <Button onClick={() => this.addLanguage()}>
                    Add
            </Button>
            </Segment>
        )
    }
}


const mapStateToProps = state => {
    return state.languages
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: header => dispatch(Actions.updateHeader(header)),
        updatePreview: isUpdate => dispatch(updatePreview(isUpdate)),
        updateLanguage: (id, language) => dispatch(Actions.updateLanguage(id, language)),
        deleteLanguage: id => dispatch(Actions.deleteLanguage(id)),
        addLanguage: () => dispatch(Actions.addLanguage()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Languages)