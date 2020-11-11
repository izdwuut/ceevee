import * as React from 'react';
import {
  Icon,
  GlobalNavigationBar,
  GlobalNavigationBarRegion,
  GlobalNavigationBarLink,
} from '@salesforce/design-system-react';

import * as Variables from 'src/env/variables'
import Accessibility from './accessibility/Accessibility'
import styles from 'styles/components/Header.module.sass'

export default class Header extends React.Component {
  render() {
    return (
      <GlobalNavigationBar className={styles.header}>
        <GlobalNavigationBarRegion region="primary">
          <a href="#" rel="Go to homepage" className={styles.logo}>{Variables.applicationName}</a>
        </GlobalNavigationBarRegion>

        <GlobalNavigationBarRegion region="secondary" navigation>
          <GlobalNavigationBarLink active label="Homepage" />
          <GlobalNavigationBarLink label="Edit CV" href="/cv/edit" />
          <GlobalNavigationBarLink label="CVs List" href="/cv/list" />
          <GlobalNavigationBarLink label="About Us" />
          <GlobalNavigationBarLink label="Contact" />
        </GlobalNavigationBarRegion>

        <GlobalNavigationBarRegion region="tertiary" className={styles.headerActions}>
          <Accessibility />
          <a
            href="#"
            className={styles.headerAction}
          >
            <Icon
              assistiveText={{ label: 'User Profile' }}
              category="utility"
              name="user"
              size="x-small"
              className={styles.headerActionIcon}
            />
              User Profile
              </a>
          <a
            href="#"
            className={styles.headerAction}
          >
            <Icon
              assistiveText={{ label: 'Log Out' }}
              category="utility"
              name="logout"
              size="x-small"
              className={styles.headerActionIcon}

            />
              Log Out
            </a>

        </GlobalNavigationBarRegion>
      </GlobalNavigationBar>

    )
  }
}
