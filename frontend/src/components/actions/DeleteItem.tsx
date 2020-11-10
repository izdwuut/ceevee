import * as React from 'react';
import { connect, ConnectedProps, AnyAction } from "react-redux"
import { bindActionCreators, Dispatch } from 'redux'
import {
    Button,
} from '@salesforce/design-system-react';

import { showModal } from 'src/store/reducers/components/modal/actions'
import { RootState } from 'src/store/reducers';
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        showModal: bindActionCreators(showModal, dispatch)
    }
}

const connector = connect(
    null,
    mapDispatchToProps
)

type DeleteItemAction = {
    (): void
}

type Props = ConnectedProps<typeof connector> & {
    onDelete: DeleteItemAction,
    title: string,
    item: string
}


export class DeleteItem extends React.Component<Props> {
    showModal = () => {
        this.props.showModal(this.props.onDelete, this.props.title, this.props.item, true)
    }

    render() {
        return (
            <Button
                assistiveText={{ icon: 'Delete' }}
                label="Delete"
                iconCategory="action"
                iconName="delete"
                iconSize="small"
                iconVariant="bare"
                colorVariant="error"
                onClick={this.showModal}
                variant="icon"
            />
        )

    }
}

export default connector(DeleteItem)


