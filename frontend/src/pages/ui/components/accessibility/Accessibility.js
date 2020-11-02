import * as React from 'react';
import {
    Icon,
    Button,

    Combobox,
    Popover,
    GlobalHeaderTask,
    GlobalHeaderSetup,
    GlobalHeaderSearch,
    GlobalHeaderProfile,
    GlobalHeaderNotifications,
    GlobalHeaderHelp,
    GlobalHeaderFavorites,
    GlobalHeader,
    Dropdown,
    DropdownTrigger,
    GlobalNavigationBar,
    GlobalNavigationBarRegion,
    GlobalNavigationBarDropdown,
    GlobalNavigationBarLink,
    AppLauncher,
    AppLauncherExpandableSection,
    AppLauncherTile,
    HorizontalNavigation,
    Slider,
    Checkbox
} from '@salesforce/design-system-react';
import styles from './Accessibility.css'
import * as Variables from '../../../../utilities/variables'
import { connect } from "react-redux"
import * as Actions from '../../../../redux/reducers/ui/accessibility/actions'
import MainContext from '../../../../index'
export class Accessibility extends React.Component {
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

const mapStateToProps = state => {
    return state.accessibility
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      toggleDarkMode: () => dispatch(Actions.toggleDarkMode()),
      resizeFont: (fontSize) => dispatch(Actions.resizeFont(fontSize)),
      toggleColorBlindMode: () => dispatch(Actions.toggleColorBlindMode()),
      toggleHighContrastMode: () => dispatch(Actions.toggleHighContrastMode())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
  )(Accessibility)