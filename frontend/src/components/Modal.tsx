import * as React from 'react';
import { connect, ConnectedProps, AnyAction } from "react-redux"
import {
    Button,
    Modal as SLDSModal
} from '@salesforce/design-system-react';
import { bindActionCreators, Dispatch } from 'redux'

import * as Actions from 'src/store/reducers/components/modal/actions'
import * as Types from 'src/store/reducers/components/modal/types'
import { RootState } from 'src/store/reducers';

const mapStateToProps = (state: RootState): Types.ModalState => {
    return state.modal
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        hideModal: bindActionCreators(Actions.hideModal, dispatch)
    }
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
)

type Props = ConnectedProps<typeof connector>

export class Modal extends React.Component<Props> {
    hideModal = () => {
        this.props.hideModal()
    }
    confirmAction = () => {
        this.props.action()
        this.hideModal()
    }
    render() {
        return (
            <SLDSModal
                footer={[
                    this.props.isDelete ?
                        <Button
                            variant="destructive"
                            onClick={this.confirmAction}
                            label="Delete"
                        />
                        :
                        <Button
                            onClick={this.confirmAction}
                            label="Ok"
                        />,
                    <Button
                        key="promptBtn"
                        label="Cancel"
                        onClick={(e) => this.hideModal()}
                    />,
                ]}
                isOpen={this.props.isVisible}
                onRequestClose={this.hideModal}

                title={<span>{this.props.title}</span>}
            >
                <div className="slds-m-around_medium">
                    Are you sure you want to delete "{this.props.item}"?
                </div>
            </SLDSModal>

        )

    }
}

export default connector(Modal)
