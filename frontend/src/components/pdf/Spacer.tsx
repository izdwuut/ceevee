import React from 'react';
import { View, Text } from '@react-pdf/renderer';

type Props = {
  size: string
}

export default class Spacer extends React.Component<Props> {
  render() {
    return (
      <View style={{ marginTop: this.props.size }}>
        <Text> </Text>
      </View>
    )
  }
}

