import * as React from 'react';
import {
    Icon,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    CardEmpty
} from '@salesforce/design-system-react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import * as Actions from 'src/store/reducers/components/cv/edit/links/actions'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'

export class Links extends React.Component {
    state = {
        expandedPanels: {},
    }
    setState = this.setState.bind(this)

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

    updateLabel = (id, label) => {
        this.props.updateLabel(id, label)
        this.updatePreview()
    }

    updateLink = (id, link) => {
        this.props.updateLink(id, link)
        this.updatePreview()
    }

    deleteLink = id => {
        this.props.deleteLink(id)
        this.props.showToast(['Link has been deleted.'])

        this.updatePreview()
    }

    addLink = () => {
        this.setState((state) => ({
            ...state,
            expandedPanels: {
                [this.props.links.length]: true
            },
        }));
        this.props.addLink()
        this.props.showToast(['New link has been added.'], 'success')

        this.updatePreview()
    }



    render() {
        const isEmpty = this.props.links.length === 0;

        let links = []
        if (this.props.links) {
            for (let i = 0; i < this.props.links.length; i++) {
                links.push(
                    <AccordionPanel
                        panelContentActions={
                            <DeleteItem title="Delete link" item={this.props.links[i].label || 'Link ' + (i + 1)} onDelete={() => this.deleteLink(i)} context={MainContext} />
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


const mapStateToProps = state => {
    return state.links
}

const mapDispatchToProps = dispatch => {
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Links)