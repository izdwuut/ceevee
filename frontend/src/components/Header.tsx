import * as React from 'react';
import {
  Icon,
  GlobalNavigationBar,
  GlobalNavigationBarRegion,
  GlobalNavigationBarLink,
} from '@salesforce/design-system-react';
import * as Variables from 'src/env/variables'
import Accessibility from './accessibility/Accessibility'

export default class Header extends React.Component {
  render() {
    return (
      <GlobalNavigationBar className="header">
        <GlobalNavigationBarRegion region="primary">
          <a href="#" rel="Go to homepage" className="logo">{Variables.applicationName}</a>
        </GlobalNavigationBarRegion>

        <GlobalNavigationBarRegion region="secondary" navigation>
          <GlobalNavigationBarLink active label="Homepage" id="home-link" />
          <GlobalNavigationBarLink label="Edit CV" href="/cv/edit/1" />
          <GlobalNavigationBarLink label="CVs List" href="/cv/list" />
          <GlobalNavigationBarLink label="About Us" />
          <GlobalNavigationBarLink label="Contact" />
        </GlobalNavigationBarRegion>

        <GlobalNavigationBarRegion region="tertiary" className="header-actions">
          <Accessibility />
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
