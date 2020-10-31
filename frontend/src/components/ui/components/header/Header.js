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
import styles from './Header.css'
import * as Variables from '../../../../utilities/variables'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontSize: 100
    }
  }
  handleFontSizeChange = (event, { value }) => {
    this.setState({
      fontSize: value
    })
  }
  render() {
    return (
      <GlobalNavigationBar className="header">
        <GlobalNavigationBarRegion region="primary">
          <a href="#" rel="Go to homepage" className="logo">{Variables.applicationName}</a>
        </GlobalNavigationBarRegion>
        <GlobalNavigationBarRegion region="secondary" navigation>
          <GlobalNavigationBarLink active label="Homepage" id="home-link" />
          <GlobalNavigationBarLink label="CVs List" />
          <GlobalNavigationBarLink label="About Us" />
          <GlobalNavigationBarLink label="Contact" />


        </GlobalNavigationBarRegion>
        <GlobalNavigationBarRegion region="tertiary" className="header-actions">
          <Popover
            body={
              <ul class="accessibility">
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
                    variant="toggle"
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
            />
            <a href="#">
              <Icon
              assistiveText={{ label: 'User Profile' }}
                category="utility"
                name="user"
                size="x-small"
              />
              User Profile
              </a>
            <a href="#">
              <Icon
              assistiveText={{ label: 'Log Out' }}
                category="utility"
                name="logout"
                size="x-small"
              />
              Log Out
              </a>
          </Popover>
        </GlobalNavigationBarRegion>
      </GlobalNavigationBar>

    )
  }
}
