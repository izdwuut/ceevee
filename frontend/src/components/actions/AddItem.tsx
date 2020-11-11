import * as React from 'react';
import {
    Button,
} from '@salesforce/design-system-react';

type AddItemAction = {
    (): void
}

type Props = {
    onAdd: AddItemAction
}

export default class AddItem extends React.Component<Props> {
    render() {
        return (
            <Button
                label="Add"
                onClick={this.props.onAdd}
                iconCategory="utility"
                iconName="add"
                iconPosition="left"
            />
        )
    }
}


