import * as React from 'react';
import { Container, Header, Accordion, Icon, Input, Menu } from 'semantic-ui-react'

export default class Skills extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            replace: this.replace
        };

        this.handleClick = this.handleClick.bind(this);
    }

    replace = [{skill: 'Lorem ipsum', description: 'Lorem ipsum'}, {skill: 'Lorem ipsum 2', description: 'Lorem ipsum 2'}]

    handleClick(e, titleProps) {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state
        let skills = []
        for (const [index, skill] of this.replace.entries()) {
            skills.push(<Menu.Item>
                        <Accordion.Title
                            active={activeIndex === index}
                            index={index}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
{skill.skill} - {skill.description}          
        </Accordion.Title>
                        <Accordion.Content active={activeIndex === index}>
                            <Input placeholder='Skill' className='input' value={skill.skill} />
                            <Input placeholder='Short description' className='input' value={skill.description} />
                        </Accordion.Content>
                    </Menu.Item>)
        }
        
        return (
            <Container text>
                <Header>Skills</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                <Accordion styled as={Menu} vertical>
                    {skills}
                </Accordion>
            </Container>
        )
    }
}