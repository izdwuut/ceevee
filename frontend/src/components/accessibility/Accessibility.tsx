import * as React from 'react';
import {
    Button,
    Popover,
    Slider,
    Checkbox
} from '@salesforce/design-system-react';
import { connect, ConnectedProps, AnyAction } from "react-redux"
import { bindActionCreators, Dispatch } from 'redux'

import * as Actions from 'src/store/reducers/components/accessibility/actions'
import { RootState } from 'src/store/reducers';

const mapStateToProps = (state: RootState) => {
    return state.accessibility
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        toggleDarkMode: bindActionCreators(Actions.toggleDarkMode, dispatch),
        resizeFont: bindActionCreators(Actions.resizeFont, dispatch),
        toggleColorBlindMode: bindActionCreators(Actions.toggleColorBlindMode, dispatch),
        toggleHighContrastMode: bindActionCreators(Actions.toggleHighContrastMode, dispatch)
    }
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
)

type Props = ConnectedProps<typeof connector>

export class Accessibility extends React.Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            isContrastMode: false
        }
    }
    handleFontSizeChange = (event, { value }) => {
        this.props.resizeFont(value)
    }
    handleHighContrastModeChange = (event, { checked }) => {
        this.props.toggleHighContrastMode()
    }
    handleColorBlindModeChange = (event, { checked }) => {
        this.props.toggleColorBlindMode()
    }
    handleDarkModeChange = (event, { checked }) => {
        this.props.toggleDarkMode()
    }

    render() {
        return (
            <Popover
                body={
                    <ul>
                        <li>
                            <Checkbox

                                label='Color Blind Mode'

                                variant="toggle"
                                checked={this.props.isColorBlindMode}
                                onChange={this.handleColorBlindModeChange}
                            />
                        </li>
                        <li>
                            <Checkbox
                                labels={{
                                    label: 'High Contrast Mode',
                                }}
                                variant="toggle"
                                checked={this.props.isHighContrastMode}
                                onChange={this.handleHighContrastModeChange}
                            />
                        </li>
                        <li>
                            <Checkbox
                                labels={{
                                    label: 'Dark Mode',
                                }}
                                variant="toggle"
                                checked={this.props.isDarkMode}
                                onChange={this.handleDarkModeChange}
                            />
                        </li>
                        <li className="font-size">
                            <Slider
                                label="Font size (in percents)"
                                min={100}
                                max={200}
                                step={1}
                                value={this.props.fontSize}
                                onChange={this.handleFontSizeChange}
                            />
                        </li>
                    </ul>
                }
                align="bottom right"
            >

                <Button
                    label="Accessibility Options"
                    iconCategory="utility"
                    iconName="settings"
                    iconPosition="left"
                    iconSize="medium"
                    className="header-action accessibility"
                />
            </Popover>

        )
    }
}

export default connector(Accessibility)