import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect } from "react-redux";
import MainContext from '../../CreateCVApp';


export class Header extends React.Component {
    render() {
        return (
            <View style={this.props.style.section}>
                <View style={this.props.style.wrapper}>
                    <Text style={this.props.style.name}>{this.props.firstName}{this.props.middleName && ' '}{this.props.middleName} {this.props.lastName}</Text>
                    <Text style={this.props.position}>{this.props.position}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state.metaData
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Header);