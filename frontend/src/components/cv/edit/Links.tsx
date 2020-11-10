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

import * as Actions from 'src/store/reducers/components/cv/edit/links/actions'
import * as Types from 'src/store/reducers/components/cv/edit/links/types'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce, PreviewDebounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'
import { RootState } from 'src/store/reducers';
import DeleteItem from 'src/components/actions/DeleteItem'

const mapStateToProps = (state: RootState): Types.LinksState => {
    return state.links
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updateHeader: bindActionCreators(Actions.updateHeader, dispatch),
        updatePreview: bindActionCreators(updatePreview, dispatch),
        updateLabel: bindActionCreators(Actions.updateLabel, dispatch),
        updateLink: bindActionCreators(Actions.updateLink, dispatch),
        deleteLink: bindActionCreators(Actions.deleteLink, dispatch),
        addLink: bindActionCreators(Actions.addLink, dispatch),
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

export class Links extends React.Component<Props> {
    state: LocalState = {
        expandedPanels: {},
    }
    setState = this.setState.bind(this)

    updatePreview: PreviewDebounce = debounce((): void => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

    updateLabel = (id: number, label: string): void => {
        this.props.updateLabel(id, label)
        this.updatePreview()
    }

    updateLink = (id: number, link: string): void => {
        this.props.updateLink(id, link)
        this.updatePreview()
    }

    deleteLink = (id: number): void => {
        this.props.deleteLink(id)
        this.props.showToast(['Link has been deleted.'])
        this.updatePreview()
    }

    addLink = (): void => {
        this.setState((state: LocalState) => ({
            ...state,
            expandedPanels: {
                [this.props.links.length]: true
            },
        }));
        this.props.addLink()
        this.props.showToast(['New link has been added.'], 'success')
        this.updatePreview()
    }

    render(): JSX.Element {
        const isEmpty: boolean = this.props.links.length === 0;

        let links: Array<AccordionPanel> = []

        for (let i = 0; i < this.props.links.length; i++) {
            links.push(
                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete link" item={this.props.links[i].label || 'Link ' + (i + 1)} onDelete={() => this.deleteLink(i)} />
                    }
                    key={i}
                    onTogglePanel={(e) => UI.getTogglePanel(i, this.setState)}
                    expanded={!!this.state.expandedPanels[i]}
                    summary={this.props.links[i].label || 'Link ' + (i + 1)}
                >
                    <Input
                        variant="outlined"
                        label='Label'
                        value={this.props.links[i].label}
                        onChange={e => this.updateLabel(i, e.target.value)}
                    />
                    <Input
                        variant="outlined"
                        label='Link'
                        value={this.props.links[i].link}
                        onChange={e => this.updateLink(i, e.target.value)}
                    />

                </AccordionPanel>
            )
        }

        return (
            <Card
                heading={this.props.header}
                icon={<Icon category="standard" name="link" size="small" />}
                headerActions={
                    !isEmpty && UI.getAdd(this.addLink)
                }
                empty={
                    isEmpty ? (
                        <CardEmpty heading="No links">
                            {UI.getAdd(this.addLink)}
                        </CardEmpty>
                    ) : null
                }
            >
                <p className='slds-col_padded'>
                    {this.props.description}
                </p>
                {links.length > 0 &&
                    <Accordion>
                        {links}
                    </Accordion>
                }


            </Card>
        )
    }
}

export default connector(Links)
