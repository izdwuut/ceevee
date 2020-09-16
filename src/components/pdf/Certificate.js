import React from 'react';
import { Text, View } from '@react-pdf/renderer';

export default class Certificate extends React.Component {
    render() {
        return (
            <View>
                <Text className="header2">
                    Lorem ipsum
                </Text>
                <Text className="header3">
                    1970-01-01 - 1970-01-02
                </Text>
            </View>
        )
    }
}

