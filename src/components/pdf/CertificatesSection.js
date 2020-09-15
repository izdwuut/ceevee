import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import Certificate from './Certificate'
export default class CertificateSection extends React.Component {
    render() {
        return (
            <View className="certificates">
                <Text>Certificates</Text>
                <Certificate />
                <Certificate />
                <Certificate />
                <Certificate />
            </View>
        )
    }
}

