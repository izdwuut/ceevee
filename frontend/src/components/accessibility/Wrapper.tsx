import { connect, ConnectedProps, AnyAction } from "react-redux"

import React from 'react'
import { Global } from '@emotion/core';
import { ReactReduxContext } from 'react-redux'

import { AccessibilityState } from 'src/store/reducers/components/accessibility/types'
import highContrastTheme from 'styles/components/accessibility/themes/highContrastTheme'
import defaultTheme from 'styles/components/accessibility/themes/defaultTheme'
import { RootState } from 'src/store/reducers';
import * as Types from 'src/store/reducers/components/accessibility/types'

const mapStateToProps = (state: RootState) => {
    return state.accessibility
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

class Wrapper extends React.Component<Props> {
    getTheme() {
        return this.props.isHighContrastMode ? highContrastTheme : defaultTheme
    }

    render() {
        return (
            <div>
                <Global styles={this.getTheme()} />
                {this.props.children}
            </div>
        )
    }
}

export default connector(Wrapper)
