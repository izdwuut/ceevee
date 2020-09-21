import React from 'react';
import { Text, View } from '@react-pdf/renderer';


export default class Header extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <View className="header-section">
                <Text className="header1">{this.props.contents.header1}</Text>
                <Text className="header2">{this.props.contents.header2}</Text>
            </View>
        )
    }
}

