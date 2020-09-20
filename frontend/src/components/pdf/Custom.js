import React from 'react';
import { Text, View } from '@react-pdf/renderer';

export default class Custom extends React.Component {
    render() {
        return (
            <View className="custom-section">
                <Text className="header1">Lorem Ipsum</Text>
                <Text className="header2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                <Text className="header3">1970-01-01 - 1970-01-02</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nisl iaculis, sodales odio at, suscipit lectus. Sed ut dui nulla. Phasellus tempor maximus erat vel sollicitudin. Integer mi eros, pellentesque eu nunc tempor, maximus maximus nibh. In hendrerit in sapien feugiat accumsan. Aenean ut libero a ex interdum lacinia. Vestibulum scelerisque est a risus viverra, a mollis dolor cursus. Donec vitae tortor mi. Duis ut viverra sem, ac auctor tellus. Nullam elit ipsum, aliquam vel rutrum eu, semper id nisl. Nulla facilisi. Etiam at varius ipsum, eget pellentesque erat. Nulla quis mauris vel odio aliquet vestibulum.
                    </Text>
            </View>
        )
    }
}

