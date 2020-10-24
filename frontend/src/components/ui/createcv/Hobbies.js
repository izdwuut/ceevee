import * as React from 'react';
import * as Actions from '../../../redux/reducers/ui/hobbies/actions'
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
export class Hobbies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedPanels: {},
        }
    }
    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

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
        this.updatePreview()
    }

    deleteHobby = id => {
        this.props.deleteHobby(id)
        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.hobbies.length === 0;

        let hobbies = []
        for (let i = 0; i < this.props.hobbies.length; i++) {
            hobbies.push(

                <AccordionPanel
                    panelContentActions={UI.getContentActions(() => this.deleteHobby(i))}
                    key={i}
                    onTogglePanel={(e) => UI.getTogglePanel(this.setState, i)}
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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
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
        updateHeader: (header) => dispatch(Actions.updateHeader(header)),
        updateHobby: (id, hobby) => dispatch(Actions.updateHobby(id, hobby)),
        addHobby: () => dispatch(Actions.addHobby()),
        deleteHobby: id => dispatch(Actions.deleteHobby(id)),
        updatePreview: (isUpdate) => dispatch(updatePreview(isUpdate))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Hobbies);