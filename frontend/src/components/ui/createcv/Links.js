import * as React from 'react';
import {
    Button,
    Segment,
    Form,
    Input,
    Header,
} from 'semantic-ui-react'
import { connect } from "react-redux"
import MainContext from '../../../CreateCVApp'
import debounce from '../../../utilities/debounce'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { debounceTime } from '../../../utilities/variables'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../../redux/reducers/ui/links/actions'
import "react-datepicker/dist/react-datepicker.css";

export class Links extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateLabel = (id, label) => {
        this.props.updateLabel(id, label)
        this.updatePreview()
    }

    updateLink = (id, link) => {
        this.props.updateLink(id, link)
        this.updatePreview()
    }

    deleteLink = id => {
        this.props.deleteLink(id)
        this.updatePreview()
    }

    addLink = () => {
        console.log(this.props.addLink)
        this.props.addLink()
        this.updatePreview()
    }

    render() {
        let links = []
        if (this.props.links) {
            for (let i = 0; i < this.props.links.length; i++) {
                links.push(
                    <Segment>
                        <Form.Field
                            control={Input}
                            label='Label'
                            value={this.props.links[i].label}
                            onChange={e => this.updateLabel(i, e.target.value)}
                        />
                        <Form.Field
                            control={Input}
                            label='Link'
                            value={this.props.links[i].link}
                            onChange={e => this.updateLink(i, e.target.value)}
                        />
                        <Button onClick={() => this.deleteLink(i)}>
                            Delete
                        </Button>
                    </Segment>
                )
            }
        }
        return (
            <Segment>
                <Header>{this.props.header}</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                {links.length > 0 &&
                    <Form>
                        {links}
                    </Form>
                }

                <Button onClick={() => this.addLink()}>
                    Add link
            </Button>
            </Segment>
        )
    }
}


const mapStateToProps = state => {
    return state.links
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: header => dispatch(Actions.updateHeader(header)),
        updatePreview: isUpdate => dispatch(updatePreview(isUpdate)),
        updateLabel: (id, label) => dispatch(Actions.updateLabel(id, label)),
        updateLink: (id, link) => dispatch(Actions.updateLink(id, link)),
        deleteLink: id => dispatch(Actions.deleteLink(id)),
        addLink: () => dispatch(Actions.addLink()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Links)