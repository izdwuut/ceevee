import * as React from 'react';
import { connect, ConnectedProps } from "react-redux"
import { bindActionCreators, Dispatch, AnyAction } from 'redux'
import {
    Icon,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    CardEmpty
} from '@salesforce/design-system-react';

import * as Actions from 'src/store/reducers/components/cv/edit/hobbies/actions'
import * as Types from 'src/store/reducers/components/cv/edit/hobbies/types'

import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce, PreviewDebounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'
import { RootState } from 'src/store/reducers';
import DeleteItem from 'src/components/contextActions/DeleteItem'

const mapStateToProps = (state: RootState): Types.HobbiesState => {
    return state.hobbies
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updateHeader: bindActionCreators(Actions.updateHeader, dispatch),
        updateHobby: bindActionCreators(Actions.updateHobby, dispatch),
        addHobby: bindActionCreators(Actions.addHobby, dispatch),
        deleteHobby: bindActionCreators(Actions.deleteHobby, dispatch),
        updatePreview: bindActionCreators(updatePreview, dispatch),
        showToast: bindActionCreators(showToast, dispatch),
    }
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type Props = ConnectedProps<typeof connector>

type LocalState = {
    expandedPanels: {}
}

export class Hobbies extends React.Component<Props> {
    state: LocalState = {
        expandedPanels: {},
    }
    setState = this.setState.bind(this)

    updatePreview: PreviewDebounce = debounce((): void => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

    updateHobby = (id: number, hobby: string): void => {
        this.props.updateHobby(id, hobby)
        this.updatePreview()
    }

    addHobby = (): void => {
        this.setState((state: LocalState) => ({
            ...state,
            expandedPanels: {
                [this.props.hobbies.length]: true
            },
        }));
        this.props.addHobby('')
        this.props.showToast(['New hobby has been added.'], 'success')
        this.updatePreview()
    }

    deleteHobby = (id: number): void => {
        this.props.deleteHobby(id)
        this.props.showToast(['Hobby has been deleted.'])
        this.updatePreview()
    }

    render(): JSX.Element {
        const isEmpty: boolean = this.props.hobbies.length === 0;

        let hobbies: Array<AccordionPanel> = []
        for (let i = 0; i < this.props.hobbies.length; i++) {
            hobbies.push(
                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete hobby" item={this.props.hobbies[i] || 'Hobby ' + (i + 1)} onDelete={() => this.deleteHobby(i)} />
                    }
                    key={i}
                    onTogglePanel={e => UI.getTogglePanel(i, this.setState)}
                    expanded={!!this.state.expandedPanels[i]}
                    summary={this.props.hobbies[i] || 'Hobby ' + (i + 1)}
                >
                    <Input
                        variant="outlined"
                        label='Hobby'
                        value={this.props.hobbies[i]}
                        onChange={e => this.updateHobby(i, e.target.value)}
                    />
                </AccordionPanel>
            )
        }

        return (
            <Card
                heading={this.props.header}
                icon={<Icon category="standard" name="topic" size="small" />}
                headerActions={
                    !isEmpty && UI.getAdd(this.addHobby)
                }
                empty={
                    isEmpty ? (
                        <CardEmpty heading="No hobbies">
                            {UI.getAdd(this.addHobby)}
                        </CardEmpty>
                    ) : null
                }
            >
                <p className='slds-col_padded'>
                    {this.props.description}
                </p>
                <Accordion>
                    {hobbies}
                </Accordion>
            </Card>
        )
    }
}

export default connector(Hobbies)
