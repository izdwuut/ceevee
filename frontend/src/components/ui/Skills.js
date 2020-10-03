import * as React from 'react';
import { Container, Header, Accordion, Icon, Input, Menu } from 'semantic-ui-react'
import { updateHeader, updateSkill, addSkill, deleteSkill } from '../../redux/actions/pdf/skills/actions'
import { connect } from "react-redux"
import MainContext from '../../CreateCVApp';
import debounce from '../../utilities/debounce'
import { updatePreview } from '../../redux/actions/pdf/pdfViewer/actions'
import { Button } from 'semantic-ui-react'
import {debounceTime} from '../../utilities/variables'
export class Skills extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateSkill = (id, skill, description) => {
        this.props.updateSkill(id, skill, description)
        this.updatePreview()
    }

    addSkill = () => {
        this.props.addSkill('', '')
        this.setState({
            activeIndex: this.props.skills.length
        })
        this.updatePreview()
    }

    deleteSkill = (id) => {
        this.props.deleteSkill(id)
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
        let skills = []
        for (let i = 0; i < this.props.skills.length; i++) {
            skills.push(<Menu.Item>
                <Accordion.Title
                    active={activeIndex === i}
                    index={i}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    {this.props.skills[i].skill}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === i}>
                    <Input placeholder='Skill' className='input' value={this.props.skills[i].skill} onChange={e => this.updateSkill(i, e.target.value, null)} />
                    <Input placeholder='Short description' className='input' value={this.props.skills[i].description} onChange={e => this.updateSkill(i, null, e.target.value)} />
                    <Button onClick={() => this.deleteSkill(i)}>
                        Delete
                  </Button>
                </Accordion.Content>
            </Menu.Item>)
        }

        return (
            <Container text>
                <Header>Skills</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                {skills.length > 0 &&
                    <Accordion styled as={Menu} vertical>
                        {skills}
                    </Accordion>
                }

                <Button onClick={this.addSkill}>
                    Add skill
                  </Button>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return state.skills
}
const mapDispatchToProps = dispatch => {
    return {
        updateHeader: (header) => dispatch(updateHeader(header)),
        updateSkill: (id, skill, description) => dispatch(updateSkill(id, skill, description)),
        addSkill: (skill, description) => dispatch(addSkill(skill, description)),
        deleteSkill: id => dispatch(deleteSkill(id)),
        updatePreview: (isUpdate) => dispatch(updatePreview(isUpdate))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Skills);