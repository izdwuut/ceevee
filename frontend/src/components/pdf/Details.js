import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';

export default class Details extends React.Component {
    render() {
        return (
            <View className="details-section">
                <Text className="header1">Details</Text>
                <Text>City, Country</Text>
                <Link url="mailto:lorem@example.com">lorem@example.com</Link>
                <Text className="header3">
                    Birth date
                </Text>
                <Text>1970-01-01</Text>
            </View>
        )
    }
}

