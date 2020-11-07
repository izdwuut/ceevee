import { connect } from 'react-redux'
import React from 'react'
import { Global } from '@emotion/core';

import { AccessibilityState } from 'src/store/reducers/components/accessibility/types'
import { MainContext } from 'src/pages/_document'
import highContrastTheme from 'styles/components/accessibility/themes/highContrastTheme'
import defaultTheme from 'styles/components/accessibility/themes/defaultTheme'

interface Props {
    Component: React.Component
    pageProps: any
    accessibility: AccessibilityState
}

class Accessibility extends React.Component<Props> {
    getTheme() {
        return this.props.accessibility.isHighContrastMode ? highContrastTheme : defaultTheme
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

const mapStateToProps = state => {
    return {
        accessibility: state.accessibility
    }
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Accessibility)
