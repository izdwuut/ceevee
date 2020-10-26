import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect } from "react-redux";
import MainContext from '../../CreateCVApp';


export class Header extends React.Component {
    render() {
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

const mapStateToProps = state => {
    return state.details
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Header);