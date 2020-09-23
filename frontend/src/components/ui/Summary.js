import * as React from 'react';
import { Form, TextArea, Container, Header, Accordion, Icon, Input } from 'semantic-ui-react'

export default class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            replace: this.replace
        }

        this.handleSummaryChange = this.handleSummaryChange.bind(this)
    }

    replace = { originalHeader: this.props.header, header: this.props.header, contents: this.props.contents }

    handleSummaryChange(event) {
        this.replace.contents = event.target.value
        this.setState({
            replace: this.replace
        })
    }

    render() {
        return (
            <Container text>
                <Header as='h2'>{this.state.replace.header}</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                <Form>
                    <TextArea onChange={this.handleSummaryChange}>
                        {this.state.replace.contents}                        
                    </TextArea>
                </Form>
            </Container>
        )
    }
}