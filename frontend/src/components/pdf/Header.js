import React from 'react';
import { Text, View } from '@react-pdf/renderer';


export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View className="header-section">
                <Text className="header1">{this.props.replace.header1}</Text>
                <Text className="header2">{this.props.replace.header2}</Text>
            </View>
        )
    }
}

