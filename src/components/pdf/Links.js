import React from 'react';
import { Link, Text, View } from '@react-pdf/renderer';

export default class Links extends React.Component {
    render() {
        return (
            <View className="links-section">
                <Text className="header1">Links</Text>
                <Link src="https://example.com">
                    example.com
                </Link>
                <Link src="https://example.com">
                    example.com
                </Link>
                <Link src="https://example.com">
                    example.com
                </Link>
            </View>
        )
    }
}

