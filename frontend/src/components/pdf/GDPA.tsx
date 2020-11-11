import React from 'react';
import { Text} from '@react-pdf/renderer';
import { connect, ConnectedProps } from "react-redux"
import { RootState } from 'src/store/reducers';
import * as Types from 'src/store/reducers/components/cv/edit/gdpa/types'

const mapStateToProps = (state: RootState): Types.GDPAState => {
    return state.gdpa
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

export class GDPA extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <Text style={this.props.style.gdpa}>{this.props.gdpa}</Text>
        )
    }
}

export default connector(GDPA)
