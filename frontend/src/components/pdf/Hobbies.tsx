import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect, ConnectedProps } from "react-redux"
import { RootState } from 'src/store/reducers';
import * as Types from 'src/store/reducers/components/cv/edit/hobbies/types'

const mapStateToProps = (state: RootState): Types.HobbiesState => {
    return state.hobbies
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

class Hobbies extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <View style={this.props.style.section}>

                {this.props.visible &&
                    <View>
                        <Text style={this.props.style.header}>{this.props.header}</Text>
                        {this.props.hobbies.map(hobby => {
                            return <View style={this.props.style.hobbyWrapper}>
                                <Text style={this.props.style.hobby}>{hobby}</Text>
                            </View>
                        })}
                    </View>
                }
            </View>
        )
    }
}

export default connector(Hobbies)
