import * as React from 'react';
import { connect, ConnectedProps, AnyAction } from "react-redux"
import { bindActionCreators, Dispatch } from 'redux'
import {
    Toast,
    ToastContainer
} from '@salesforce/design-system-react';

import * as Variables from 'src/env/variables'
import * as Actions from 'src/store/reducers/components/toasts/actions'
import * as Types from 'src/store/reducers/components/toasts/types'
import { RootState } from 'src/store/reducers';

const mapStateToProps = (state: RootState): Types.ToastsState => {
    return state.toasts
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        hideToast: bindActionCreators(Actions.hideToast, dispatch)
    }
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type Props = ConnectedProps<typeof connector>

type LocalState = {
    toasts: Array<Toast>
}

export class Toasts extends React.Component<Props> {
    state: LocalState = {
        toasts: []
    }

    componentDidUpdate(prevProps: Props, prevState: LocalState): void {
        if (this.props.toasts.length === prevProps.toasts.length) {
            return
        }
        const lastElement: number = this.props.toasts.length - 1
        const toastsCopy: Array<Toast> = [...this.state.toasts]
        toastsCopy.push(
            <Toast
                labels={{
                    heading: this.props.toasts[lastElement].heading,
                }}
                variant={this.props.toasts[lastElement].variant}
                onRequestClose={() => this.removeToast(lastElement)}
            />
        )
        this.setState({
            toasts: toastsCopy
        })
        this.hideToast(lastElement)
    }

    // We override default Toast behaviour (the duration parameter),
    // because as of now it doesn't work properly for multiple toasts.
    hideToast = (id: number): void => {
        setTimeout(() => {
            this.removeToast(id)
        }, Variables.toastDuration)
    }

    removeToast = (id: number): void => {
        this.props.hideToast(id)
        const toastsCopy: Array<Toast> = [...this.state.toasts]
        toastsCopy[id] = null
        this.setState({
            toasts: toastsCopy
        })
    }

    render() {
        return (
            <ToastContainer>
                {this.state.toasts}
            </ToastContainer>
        )
    }
}

export default connector(Toasts)
