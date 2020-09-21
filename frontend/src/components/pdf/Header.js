import React from 'react';
import { Text, View } from '@react-pdf/renderer';

export default class Header extends React.Component {
    render() {
        return (
            <View className="header-section">
                <Text className="header1">łłJohn Kowalski</Text>
                <Text className="header2">Junior Programmer</Text>
            </View>
        )
    }
}

