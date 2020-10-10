import * as React from 'react';
import { Segment, Header, Accordion, Icon, Input, Menu } from 'semantic-ui-react'
import * as Actions from '../../../redux/reducers/ui/hobbies/actions'
import { connect } from "react-redux"
import MainContext from '../../../CreateCVApp';
import debounce from '../../../utilities/debounce'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { Button } from 'semantic-ui-react'
import { debounceTime } from '../../../utilities/variables'

export class Hobbies extends React.Component {
    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateHobby = (id, hobby) => {
        this.props.updateHobby(id, hobby)
        this.updatePreview()
    }

    addHobby = () => {
        this.props.addHobby('')
        this.updatePreview()
    }

    deleteHobby = id => {
        this.props.deleteHobby(id)
        this.updatePreview()
    }

    render() {
        let hobbies = []
        for (let i = 0; i < this.props.hobbies.length; i++) {
            hobbies.push(

                <Segment>
                    <Input placeholder='Hobby' className='input' value={this.props.hobbies[i]} onChange={e => this.updateHobby(i, e.target.value)} />
                    <Button onClick={() => this.deleteHobby(i)}>
                        Delete
                  </Button>
                  </Segment>
            )
        }

        return (
            <Segment>
                <Header>{this.props.header}</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                
                        {hobbies}
                    
                

                <Button onClick={this.addHobby}>
                    Add
                </Button>
            </Segment>
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