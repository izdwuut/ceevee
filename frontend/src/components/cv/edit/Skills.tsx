import * as React from 'react';
import {
    Icon,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    CardEmpty
} from '@salesforce/design-system-react';
import { connect, ConnectedProps } from "react-redux"
import { bindActionCreators, Dispatch, AnyAction } from 'redux'

import { debounce, PreviewDebounce } from 'src/utilities/debounce'
import * as Actions from 'src/store/reducers/components/cv/edit/skills/actions'
import * as Types from 'src/store/reducers/components/cv/edit/skills/types'
import * as UI from 'src/utilities/ui'
import DeleteItem from '../../actions/DeleteItem'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import * as Variables from 'src/env/variables'
import { RootState } from 'src/store/reducers';
import AddItem from 'src/components/actions/AddItem'

const mapStateToProps = (state: RootState): Types.SkillsState => {
    return state.skills
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
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

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type Props = ConnectedProps<typeof connector>

type LocalState = {
    expandedPanels: {}
}

export class Skills extends React.Component<Props> {
    state: LocalState = {
        expandedPanels: {},
    }
    setState = this.setState.bind(this)

    updatePreview: PreviewDebounce = debounce((): void => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

    updateSkill = (id: number, skill: string): void => {
        this.props.updateSkill(id, skill)
        this.updatePreview()
    }

    updateDescription = (id: number, description: string): void => {
        this.props.updateDescription(id, description)
        this.updatePreview()
    }

    addSkill = (): void => {
        this.setState((state: LocalState) => ({
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

    deleteSkill = (id: number): void => {
        this.props.deleteSkill(id)
        this.props.showToast(['Skill has been deleted.'])
        this.updatePreview()
    }

    render(): JSX.Element {
        const isEmpty: boolean = this.props.skills.length === 0

        let skills: Array<AccordionPanel> = []
        for (let i = 0; i < this.props.skills.length; i++) {
            skills.push(
                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete skill" item={this.props.skills[i].skill || 'Skill ' + (i + 1)} onDelete={() => this.deleteSkill(i)} />}
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
                    !isEmpty && <AddItem onAdd={this.addSkill} />
                }
                empty={
                    isEmpty ? (
                        <CardEmpty heading="No skills">
                            <AddItem onAdd={this.addSkill} />
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

export default connector(Skills)
