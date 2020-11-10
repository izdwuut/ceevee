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

import * as Actions from 'src/store/reducers/components/cv/edit/languages/actions'
import * as Types from 'src/store/reducers/components/cv/edit/languages/types'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce, PreviewDebounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'
import { RootState } from 'src/store/reducers';
import DeleteItem from 'src/components/actions/DeleteItem'
import AddItem from 'src/components/actions/AddItem'

const mapStateToProps = (state: RootState): Types.LanguagesState => {
    return state.languages
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updateHeader: bindActionCreators(Actions.updateHeader, dispatch),
        updateLanguage: bindActionCreators(Actions.updateLanguage, dispatch),
        deleteLanguage: bindActionCreators(Actions.deleteLanguage, dispatch),
        addLanguage: bindActionCreators(Actions.addLanguage, dispatch),
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

export class Languages extends React.Component<Props> {
    state: LocalState = {
        expandedPanels: {},
    }
    setState = this.setState.bind(this)

    updatePreview: PreviewDebounce = debounce((): void => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

    updateLanguage = (id: number, language: string): void => {
        this.props.updateLanguage(id, language)
        this.updatePreview()
    }

    deleteLanguage = (id: number): void => {
        this.props.deleteLanguage(id)
        this.props.showToast(['Language has been deleted.'])

        this.updatePreview()
    }

    addLanguage = (): void => {
        this.setState((state: LocalState) => ({
            ...state,
            expandedPanels: {
                [this.props.languages.length]: true
            },
        }));
        this.props.addLanguage()
        this.props.showToast(['New language has been added.'], 'success')

        this.updatePreview()
    }

    render(): JSX.Element {
        const isEmpty: boolean = this.props.languages.length === 0;

        let languages: Array<AccordionPanel> = []
        for (let i = 0; i < this.props.languages.length; i++) {
            languages.push(
                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete language" item={this.props.languages[i] || 'Language ' + (i + 1)} onDelete={() => this.deleteLanguage(i)} />
                    }
                    key={i}
                    onTogglePanel={(e) => UI.getTogglePanel(i, this.setState)}
                    expanded={!!this.state.expandedPanels[i]}
                    summary={this.props.languages[i] || 'Language ' + (i + 1)}
                >
                    <Input
                        variant="outlined"
                        label='Language'
                        value={this.props.languages[i]}
                        onChange={e => this.updateLanguage(i, e.target.value)}
                    />
                </AccordionPanel>
            )
        }

        return (
            <Card
                heading={this.props.header}
                icon={<Icon category="standard" name="live_chat" size="small" />}
                headerActions={
                    !isEmpty && <AddItem onAdd={this.addLanguage} />
                }
                empty={
                    isEmpty ? (
                        <CardEmpty heading="No languages">
                            <AddItem onAdd={this.addLanguage} />
                        </CardEmpty>
                    ) : null
                }
            >
                <p className='slds-col_padded'>
                    {this.props.description}
                </p>
                {languages.length > 0 &&
                    <Accordion>
                        {languages}
                    </Accordion>
                }
            </Card>
        )
    }
}

export default connector(Languages)
