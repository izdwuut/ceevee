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
import Accessibility from '../accessibility/Accessibility'
import MainContext from '../../../../index';

export default class Header extends React.Component {
  
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

          <Accessibility context={MainContext}/>
          <a
            href="#"
            className="header-action"
          >
            <Icon
              assistiveText={{ label: 'User Profile' }}
              category="utility"
              name="user"
              size="x-small"
              className="header-action-icon"
            />
              User Profile
              </a>
          <a
            href="#"
            className="header-action"
          >
            <Icon
              assistiveText={{ label: 'Log Out' }}
              category="utility"
              name="logout"
              size="x-small"
              className="header-action-icon"

            />
              Log Out
            </a>

        </GlobalNavigationBarRegion>
      </GlobalNavigationBar>

    )
  }
}
