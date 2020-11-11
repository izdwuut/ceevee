import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect, ConnectedProps } from "react-redux"
import { RootState } from 'src/store/reducers';
import * as Types from 'src/store/reducers/components/cv/edit/details/types'

const mapStateToProps = (state:RootState):Types.DetailsState => {
    return state.details
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

export class Header extends React.Component<Props> {
    render():JSX.Element {
        return (
            <View style={this.props.style.section}>
                <View style={this.props.style.wrapper}>
                    {this.props.fullName &&
                        <Text style={this.props.style.fullName}>
                            {this.props.firstName}{this.props.middleName && ' '}{this.props.middleName} {this.props.lastName}
                        </Text>
                    }
                    {!this.props.fullName &&
                        <Text style={this.props.style.firstName}>
                            {this.props.firstName}
                        </Text>
                    }
                    {!this.props.fullName &&
                        <Text style={this.props.style.middleName}>
                            {this.props.middleName}
                        </Text>
                    }
                    {!this.props.fullName &&
                        <Text style={this.props.style.lastName}>
                            {this.props.lastName}
                        </Text>
                    }

                    <Text style={this.props.style.position}>{this.props.position}</Text>
                </View>
            </View>
        )
    }
}

export default connector(Header)
