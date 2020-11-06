import * as React from 'react';
import { connect, ConnectedProps, AnyAction } from "react-redux"
import { bindActionCreators, Dispatch } from 'redux'
import {
    Toast,
    ToastContainer
} from '@salesforce/design-system-react';

import * as Variables from 'src/env/variables'
import * as Actions from 'src/store/reducers/components/toasts/actions'
import { MainContext } from 'src/pages/_document'
import * as Types from 'src/store/reducers/components/toasts/types'
import { RootState } from 'src/store/reducers';

type MappedProps = {
    toasts: Types.ToastsState
}

const mapStateToProps = (state: RootState): MappedProps => {
    return {
        toasts: state.toasts
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        hideToast: bindActionCreators(Actions.hideToast, dispatch)
    }
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
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
        const lastElement: number = this.props.toasts.toasts.length - 1
        if (this.props.toasts.toasts.length === 0 || this.props.toasts[lastElement] === null) {
            return
        }
        this.state.toasts.push(
            <Toast
                labels={{
                    heading: this.props.toasts[lastElement].heading,
                }}
                variant={this.props.toasts[lastElement].variant}
            />
        )
        this.hideToast(lastElement)
    }

    // We override default Toast behaviour (the duration parameter),
    // because as of now it doesn't work properly for multiple toasts.
    hideToast = (id: number): void => {
        this.props.hideToast(id)
        setTimeout(() => {
            this.setState({
                toasts: this.removeToast(id)
            })
        }, Variables.toastDuration)
    }
    
    removeToast = (id: number): Array<Toast> => {
        const toastsCopy: Array<Toast> = [...this.state.toasts]
        toastsCopy[id] = null
        return toastsCopy
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
