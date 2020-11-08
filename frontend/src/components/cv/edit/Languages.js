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

import * as Actions from 'src/store/reducers/components/cv/edit/languages/actions'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'



export class Languages extends React.Component {
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

    updateLanguage = (id, language) => {
        this.props.updateLanguage(id, language)
        this.updatePreview()
    }

    deleteLanguage = id => {
        this.props.deleteLanguage(id)
        this.props.showToast(['Language has been deleted.'])

        this.updatePreview()
    }

    addLanguage = () => {
        this.setState((state) => ({
            ...state,
            expandedPanels: {
                [this.props.languages.length]: true
            },
        }));
        this.props.addLanguage()
        this.props.showToast(['New language has been added.'], 'success')

        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.languages.length === 0;


        let languages = []
        for (let i = 0; i < this.props.languages.length; i++) {
            languages.push(
                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete language" item={this.props.languages[i] || 'Language ' + (i + 1)} onDelete={() => this.deleteLanguage(i)} context={MainContext} />
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
                    !isEmpty && UI.getAdd(this.addLanguage)
                }
                empty={
                    isEmpty ? (
                        <CardEmpty heading="Languages">
                            {UI.getAdd(this.addLanguage)}
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


const mapStateToProps = state => {
    return state.languages
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: bindActionCreators(Actions.updateHeader,dispatch),
        updateLanguage: bindActionCreators(Actions.updateLanguage,dispatch),
        deleteLanguage: bindActionCreators(Actions.deleteLanguage,dispatch),
        addLanguage: bindActionCreators(Actions.addLanguage,dispatch),
        updatePreview: bindActionCreators(updatePreview,dispatch),
        showToast: bindActionCreators(showToast,dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Languages)