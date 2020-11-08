import * as React from 'react';
import { connect } from "react-redux"

import {
    Icon,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    CardEmpty
} from '@salesforce/design-system-react';
import { bindActionCreators } from 'redux'

import { debounce } from 'src/utilities/debounce'
import * as Actions from 'src/store/reducers/components/cv/edit/skills/actions'
import * as UI from 'src/utilities/ui'
import DeleteItem from '../../contextActions/DeleteItem'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import * as Variables from 'src/env/variables'


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
    }, Variables.debounceTime)

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
        this.props.showToast(['New skill has been added.'], 'success')

        this.updatePreview()
    }

    deleteSkill = (id) => {
        this.props.deleteSkill(id)
        this.props.showToast(['Skill has been deleted.'])

        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.skills.length === 0

        let skills = []
        for (let i = 0; i < this.props.skills.length; i++) {
            skills.push(
                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete skill" item={this.props.skills[i].skill || 'Skill ' + (i + 1)} onDelete={() => this.deleteSkill(i)} context={MainContext} />}
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
        updateHeader: bindActionCreators(Actions.updateHeader, dispatch),
        updateSkill: bindActionCreators(Actions.updateSkill, dispatch),
        updateDescription: bindActionCreators(Actions.updateDescription, dispatch),
        addSkill: bindActionCreators(Actions.addSkill, dispatch),
        deleteSkill: bindActionCreators(Actions.deleteSkill, dispatch),
        updatePreview: bindActionCreators(updatePreview, dispatch),
        showToast: bindActionCreators(showToast, dispatch)

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Skills);