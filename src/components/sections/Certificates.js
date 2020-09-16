import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import Certificate from '../pdf/Certificate'
export default class CertificateSection extends React.Component {
    render() {
        return (
            <View className="certificates-section">
                <Text className="header1">Certificates</Text>
                <Certificate />
                <Certificate />
                <Certificate />
                <Certificate />
            </View>
        )
    }
}

