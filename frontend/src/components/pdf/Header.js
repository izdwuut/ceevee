import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect } from 'react-redux'

export class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View className="header-section">
                <Text className="header">{this.state.header}</Text>
                <Text className="subheader">{this.state.subheader}</Text>
            </View>
        )
    }
}