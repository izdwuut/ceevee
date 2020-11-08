import * as React from 'react';
import {
    Icon,
    Card,
    Textarea,
    
} from '@salesforce/design-system-react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { debounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as Actions from 'src/store/reducers/components/cv/edit/gdpa/actions'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'


export class GDPA extends React.Component {

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

    updateGdpa = (gdpa) => {
        this.props.updateGdpa(gdpa)
        this.updatePreview()
    }
    render() {
        return (
            <Card
                heading={this.props.header}

                icon={<Icon category="standard" name="note" size="small" />}
            >
                <p className='slds-col_padded'>
                    {this.props.description}
                </p>
                <div className="slds-grid slds-gutters slds-col_padded">
                    <div className="slds-col">
                        <Textarea

                            label='Description'
                            value={this.props.gdpa}
                            onChange={e => this.updateGdpa(e.target.value)}
                        />
                    </div>
                </div>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return state.gdpa
}

const mapDispatchToProps = dispatch => {
    return {
        deleteSkill: bindActionCreators(Actions.updateGdpa, dispatch),
        updatePreview: bindActionCreators(updatePreview, dispatch)

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GDPA);