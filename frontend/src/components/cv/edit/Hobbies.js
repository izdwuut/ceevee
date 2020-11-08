import * as React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import {
    Icon,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    CardEmpty
} from '@salesforce/design-system-react';

import * as Actions from 'src/store/reducers/components/cv/edit/hobbies/actions'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'

export class Hobbies extends React.Component {
        state = {
            expandedPanels: {},
        }
  
    setState = this.setState.bind(this)

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

    updateHobby = (id, hobby) => {
        this.props.updateHobby(id, hobby)
        this.updatePreview()
    }

    addHobby = () => {
        this.setState((state) => ({
            ...state,
            expandedPanels: {
                [this.props.hobbies.length]: true
            },
        }));
        this.props.addHobby('')
        this.props.showToast(['New hobby has been added.'], 'success')

        this.updatePreview()
    }

    deleteHobby = id => {
        this.props.deleteHobby(id)
        this.props.showToast(['Hobby has been deleted.'])

        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.hobbies.length === 0;

        let hobbies = []
        for (let i = 0; i < this.props.hobbies.length; i++) {
            hobbies.push(

                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete hobby" item={this.props.hobbies[i] || 'Hobby ' + (i + 1)} onDelete={() => this.deleteHobby(i)} context={MainContext} />
                    }
                    key={i}
                    onTogglePanel={(e) => UI.getTogglePanel(i, this.setState)}
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

const mapStateToProps = state => {
    return state.hobbies
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: bindActionCreators(Actions.updateHeader, dispatch),
        updateHobby: bindActionCreators(Actions.updateHobby, dispatch),
        addHobby: bindActionCreators(Actions.addHobby, dispatch),
        deleteHobby: bindActionCreators(Actions.deleteHobby, dispatch),
        updatePreview: bindActionCreators(updatePreview, dispatch),
        showToast: bindActionCreators(showToast, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Hobbies);