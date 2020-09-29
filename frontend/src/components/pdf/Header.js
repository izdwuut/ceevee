import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect } from "react-redux";
import MainContext from '../../CreateCVApp';
export class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View className="header-section">
                <Text className="header">{this.props.firstName} {this.props.lastName}</Text>
                <Text className="subheader">Lorem ipsum</Text>
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
    {context: MainContext}
)(Header);