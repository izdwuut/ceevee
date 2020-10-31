import * as React from 'react';
import * as Actions from '../../../redux/reducers/ui/skills/actions'
import { connect } from "react-redux"
import MainContext from '../../../CreateCVApp';
import debounce from '../../../utilities/debounce'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { debounceTime } from '../../../utilities/variables'
import * as UI from '../../../utilities/ui'

import {
    Icon,
    InputIcon,
    Button,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    Tooltip,
    Textarea,
    CardEmpty
} from '@salesforce/design-system-react';

export class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedPanels: {},
        }
    }
    setState = this.setState.bind(this)

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateSkill = (id, skill) => {
        this.props.updateSkill(id, skill)
        this.updatePreview()
    }

    updateDescription = (id, description) => {
        this.props.updateDescription(id, description)
        this.updatePreview()
    }

    addSkill = () => {
        this.setState((state) => ({
            ...state,
            expandedPanels: {
                [this.props.skills.length]: true
            },
        }));
        this.props.addSkill()
        this.setState({
            activeIndex: this.props.skills.length
        })
        this.updatePreview()
    }

    deleteSkill = (id) => {
        this.props.deleteSkill(id)
        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.skills.length === 0

        let skills = []
        for (let i = 0; i < this.props.skills.length; i++) {
            skills.push(
                <AccordionPanel
                    panelContentActions={UI.getContentActions(() => this.deleteSkill(i))}
                    key={i}
                    onTogglePanel={(e) => UI.getTogglePanel(i, this.setState)}
                    expanded={!!this.state.expandedPanels[i]}
                    summary={this.props.skills[i].skill || 'Skill ' + (i + 1)}

                >
                    <Input
                        variant="outlined"
                        label='Skill'
                        value={this.props.skills[i].skill}
                        onChange={e => this.updateSkill(i, e.target.value)}
                    />
                    <Input
                        variant="outlined"
                        label='Description'
                        value={this.props.skills[i].description}
                        onChange={e => this.updateDescription(i, e.target.value)}
                    />
                </AccordionPanel>
            )
        }

        return (
            <Card
                heading={this.props.header}

                icon={<Icon category="standard" name="skill" size="small" />}
                headerActions={
                    !isEmpty && UI.getAdd(this.addSkill)
                }
                empty={
                    isEmpty ? (
                        <CardEmpty heading="No skills">
                            {UI.getAdd(this.addSkill)}
                        </CardEmpty>
                    ) : null
                }
            >

                <p className='slds-col_padded'>
                    {this.props.description}
                </p>
                {skills.length > 0 &&
                    <Accordion>
                        {skills}
                    </Accordion>
                }


            </Card>
        )
    }
}

const mapStateToProps = state => {
    return state.skills
}
const mapDispatchToProps = dispatch => {
    return {
        updateHeader: (header) => dispatch(Actions.updateHeader(header)),
        updateSkill: (id, skill) => dispatch(Actions.updateSkill(id, skill)),
        updateDescription: (id, description) => dispatch(Actions.updateDescription(id, description)),
        addSkill: () => dispatch(Actions.addSkill()),
        deleteSkill: id => dispatch(Actions.deleteSkill(id)),
        updatePreview: (isUpdate) => dispatch(updatePreview(isUpdate))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Skills);