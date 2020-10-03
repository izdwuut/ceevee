import * as React from 'react';
import { Container, Header, Accordion, Icon, Input, Menu } from 'semantic-ui-react'
import { updateHeader, updateHobby, addHobby, deleteHobby } from '../../redux/actions/pdf/hobbies/actions'
import { connect } from "react-redux"
import MainContext from '../../CreateCVApp';
import debounce from '../../utilities/debounce'
import { updatePreview } from '../../redux/actions/pdf/pdfViewer/actions'
import { Button } from 'semantic-ui-react'
import {debounceTime} from '../../utilities/variables'

export class Hobbies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateHobby = (id, hobby) => {
        this.props.updateHobby(id, hobby)
        this.updatePreview()
    }

    addHobby = () => {
        this.props.addHobby('')
        this.setState({
            activeIndex: this.props.hobbies.length
        })
        this.updatePreview()
    }

    deleteHobby = id => {
        this.props.deleteHobby(id)
        this.updatePreview()
    }

    handleClick(e, titleProps) {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state
        let hobbies = []
        for (let i = 0; i < this.props.hobbies.length; i++) {
            hobbies.push(<Menu.Item>
                <Accordion.Title
                    active={activeIndex === i}
                    index={i}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    {this.props.hobbies[i]}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === i}>
                    <Input placeholder='Hobby' className='input' value={this.props.hobbies[i]} onChange={e => this.updateHobby(i, e.target.value)} />
                    <Button onClick={() => this.deleteHobby(i)}>
                        Delete
                  </Button>
                </Accordion.Content>
            </Menu.Item>)
        }

        return (
            <Container text>
                <Header>{this.props.header}</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                {hobbies.length > 0 &&
                    <Accordion styled as={Menu} vertical>
                        {hobbies}
                    </Accordion>
                }

                <Button onClick={this.addHobby}>
                    Add
                </Button>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return state.hobbies
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: (header) => dispatch(updateHeader(header)),
        updateHobby: (id, hobby) => dispatch(updateHobby(id, hobby)),
        addHobby: (hobby) => dispatch(addHobby(hobby)),
        deleteHobby: id => dispatch(deleteHobby(id)),
        updatePreview: (isUpdate) => dispatch(updatePreview(isUpdate))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Hobbies);