import * as React from 'react';
import {
    Icon,
    Card,
    Textarea,
} from '@salesforce/design-system-react';
import { connect, ConnectedProps } from "react-redux"
import { bindActionCreators, Dispatch, AnyAction } from 'redux'

import { debounce, PreviewDebounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as Actions from 'src/store/reducers/components/cv/edit/gdpa/actions'
import * as Types from 'src/store/reducers/components/cv/edit/gdpa/types'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { RootState } from 'src/store/reducers';

const mapStateToProps = (state: RootState):Types.GDPAState => {
    return state.gdpa
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        deleteSkill: bindActionCreators(Actions.updateGdpa, dispatch),
        updatePreview: bindActionCreators(updatePreview, dispatch)
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type Props = ConnectedProps<typeof connector>

export class GDPA extends React.Component<Props> {

    updatePreview: PreviewDebounce = debounce((): void => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

    updateGdpa = (gdpa: string): void => {
        this.props.updateGdpa(gdpa)
        this.updatePreview()
    }
    render(): JSX.Element {
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



export default connector(GDPA)
