import * as React from 'react';
import { connect } from "react-redux"
import MainContext from '../../../index'


import debounce from '../../../utilities/debounce'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { debounceTime } from '../../../utilities/variables'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../../redux/reducers/ui/createcv/languages/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
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
    }, debounceTime)

    updateLanguage = (id, language) => {
        this.props.updateLanguage(id, language)
        this.updatePreview()
    }

    deleteLanguage = id => {
        this.props.deleteLanguage(id)
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
        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.languages.length === 0;


        let languages = []
        for (let i = 0; i < this.props.languages.length; i++) {
            languages.push(
                <AccordionPanel
                    panelContentActions={UI.getContentActions(() => this.deleteLanguage(i))}
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
        updateHeader: header => dispatch(Actions.updateHeader(header)),
        updatePreview: isUpdate => dispatch(updatePreview(isUpdate)),
        updateLanguage: (id, language) => dispatch(Actions.updateLanguage(id, language)),
        deleteLanguage: id => dispatch(Actions.deleteLanguage(id)),
        addLanguage: () => dispatch(Actions.addLanguage()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Languages)