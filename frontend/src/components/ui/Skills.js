import * as React from 'react';
import { Form, TextArea, Container, Header, Accordion, Icon, Input } from 'semantic-ui-react'

export default class Skills extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            replace: this.replace
        };

        this.handleClick = this.handleClick.bind(this);
    }

    replace = []
    panels = [
        {
            key: 'skills',
            title: 'Lorem ipsum',
            content: {
                as: Form.Input,
                label: 'Maiden Name',
                placeholder: 'Maiden Name',
            },
        },
    ]
    handleClick(e, titleProps) {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state
        let skills = []
        for (const skill of this.replace) {
            skills.push()
        }
        return (

            <Container text>
                <Header>Skills</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                <Accordion styled>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
          Lorem ipsum
        </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <Input placeholder='Skill' className='input' />
                        <Input placeholder='Short description' className='input' />
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
          What kinds of dogs are there?
        </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <p>
                            There are many breeds of dogs. Each breed varies in size and
                            temperament. Owners often select a breed of dog that they find to be
                            compatible with their own lifestyle and desires from a companion.
                            </p>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
          How do you acquire a dog?
        </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <p>
                            Three common ways for a prospective owner to acquire a dog is from
                            pet shops, private owners, or shelters.
                            </p>
                        <p>
                            A pet shop may be the most convenient way to buy a dog. Buying a dog
                            from a private owner allows you to assess the pedigree and
                            upbringing of your dog before choosing to take it home. Lastly,
                            finding your dog from a shelter, helps give a good home to a dog who
                            may not find one so readily.
                            </p>
                    </Accordion.Content>
                </Accordion>
            </Container>

        )
    }
}