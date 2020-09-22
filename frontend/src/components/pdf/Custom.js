import React from 'react';
import { Text, View } from '@react-pdf/renderer';

export default class Custom extends React.Component {
    render() {
        return (
            <View className="custom-section">
                <Text className="header1">{this.props.replace.header}</Text>
                <Text className="header2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                <Text className="header3">1970-01-01 - 1970-01-02</Text>
                <Text>
                    {this.props.replace.contents}
                </Text>
            </View>
        )
    }
}

