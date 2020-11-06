import { connect } from 'react-redux'
import React from 'react'

import { AccessibilityState } from 'src/store/reducers/components/accessibility/types'
import { MainContext } from 'src/pages/_document'

interface Props {
    Component: React.Component
    pageProps: any
    accessibility: AccessibilityState
}

class Accessibility extends React.Component<Props> {
    
    render() {
        
        return (
            <div>
                {this.props.accessibility.isHighContrastMode}
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
