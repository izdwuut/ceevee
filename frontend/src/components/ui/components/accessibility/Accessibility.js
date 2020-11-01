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


export default class Accessibility extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontSize: 100,
            isContrastMode: false
        }
    }
    handleFontSizeChange = (event, { value }) => {
        this.setState({
            fontSize: value
        })
    }
    handleContrastModeChange = (event, { checked }) => {
        
        this.setState({
            isContrastMode: !this.state.isContrastMode
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.isContrastMode) {
            this.applyStylesheet('./styles/contrast.css')
        }
    }
    applyStylesheet = (stylesheet) => {
        // require(stylesheet)
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
                            />
                        </li>
                        <li>
                            <Checkbox
                                labels={{
                                    label: 'High Contrast Mode',
                                }}
                                defaultChecked={this.state.isContrastMode}
                                variant="toggle"
                                onChange={this.handleContrastModeChange}
                            />
                        </li>
                        <li>
                            <Checkbox
                                labels={{
                                    label: 'Dark Mode',
                                }}
                                variant="toggle"
                            />
                        </li>
                        <li className="font-size">
                            <Slider
                                label="Font size (in percents)"
                                min={100}
                                max={200}
                                step={1}
                                value={this.state.fontSize}
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
