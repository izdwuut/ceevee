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


const ipsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum eros, vel porta metus dignissim vitae. Fusce finibus sed magna vitae tempus. Suspendisse condimentum, arcu eu viverra vulputate, mauris odio dictum velit, in dictum lorem augue id augue. Proin nec leo convallis, aliquet mi ut, interdum nunc.';

const HeaderNotificationsCustomContent = (props) => (
  <ul id="header-notifications-custom-popover-content">
    {props.items.map((item) => (
      <li
        className={`slds-global-header__notification ${item.unread ? 'slds-global-header__notification_unread' : ''
          }`}
        key={`notification-item-${item.id}`}
      >
        <div className="slds-media slds-has-flexi-truncate slds-p-around_x-small">
          <div className="slds-media__figure">
            <span className="slds-avatar slds-avatar_small">
              <img
                alt={item.name}
                src={`/assets/images/${item.avatar}.jpg`}
                title={`${item.name} avatar"`}
              />
            </span>
          </div>
          <div className="slds-media__body">
            <div className="slds-grid slds-grid_align-spread">
              <a
                href="javascript:void(0);"
                className="slds-text-link_reset slds-has-flexi-truncate"
              >
                <h3
                  className="slds-truncate"
                  title={`${item.name} ${item.action}`}
                >
                  <strong>{`${item.name} ${item.action}`}</strong>
                </h3>
                <p className="slds-truncate" title={item.comment}>
                  {item.comment}
                </p>
                <p className="slds-m-top_x-small slds-text-color_weak">
                  {item.timePosted}{' '}
                  {item.unread ? (
                    <abbr
                      className="slds-text-link slds-m-horizontal_xxx-small"
                      title="unread"
                    >
                      ●
                    </abbr>
                  ) : null}
                </p>
              </a>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
);
HeaderNotificationsCustomContent.displayName =
  'HeaderNotificationsCustomContent';

// Profile content is currently the contents of a generic `Popover` with markup copied from https://www.lightningdesignsystem.com/components/global-header/. This allows content to have tab stops and focus trapping. If you need a more specific/explicit `GlobalHeaderProfile` content, please create an issue.
const HeaderProfileCustomContent = (props) => (
  <div id="header-profile-custom-popover-content">
    <div className="slds-m-around_medium">
      <div className="slds-tile slds-tile_board slds-m-horizontal_small">
        <p className="tile__title slds-text-heading_small">Art Vandelay</p>
        <div className="slds-tile__detail">
          <p className="slds-truncate">
            <a
              className="slds-m-right_medium"
              href="javascript:void(0)"
              onClick={props.onClick}
            >
              Settings
              </a>
            <a href="javascript:void(0)" onClick={props.onClick}>
              Log Out
              </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);
HeaderProfileCustomContent.displayName = 'HeaderProfileCustomContent';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontSize: 100
    }
  }
  static displayName = 'GlobalNavigationBarExample';
  handleFontSizeChange = (event, { value }) => {
    this.setState({
      fontSize: value
    })
  }
  render() {
    const dropdownCollection = [
      {
        label: 'Menu Item One',
        value: '1',
        iconCategory: 'utility',
        iconName: 'table',
        href: 'http://www.google.com',
      },
      {
        label: 'Menu Item Two',
        value: '2',
        iconCategory: 'utility',
        iconName: 'kanban',
        href: 'http://www.google.com',
      },
      {
        label: 'Menu Item Three',
        value: '3',
        iconCategory: 'utility',
        iconName: 'side_list',
        href: 'http://www.google.com',
      },
    ];
    return (
      //   <header className="header">
      //     <a href="#" rel="Go to homepage" className="logo">{Variables.applicationName}</a>
      //     

      //     <nav className="nav">

      //     </nav>
      //     <Button
      //       label="Back to CVs list"
      //       iconCategory="utility"
      //       iconName="back"
      //       iconPosition="left"
      //     />
      //   </header>
      <GlobalNavigationBar className="header">
        <GlobalNavigationBarRegion region="primary">
          <a href="#" rel="Go to homepage" className="logo">{Variables.applicationName}</a>
        </GlobalNavigationBarRegion>
        <GlobalNavigationBarRegion region="secondary" navigation>
          <GlobalNavigationBarLink active label="Home" id="home-link" />
          <GlobalNavigationBarDropdown
            assistiveText={{ icon: 'Open menu item submenu' }}
            id="primaryDropdown"
            label="Menu Item"
            options={dropdownCollection}
          />
          <GlobalNavigationBarLink label="Menu Item" />
          <GlobalNavigationBarLink label="Menu Item" />
          <GlobalNavigationBarLink label="Menu Item" />
        </GlobalNavigationBarRegion>
        <GlobalNavigationBarRegion region="secondary">
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
                  {/* <Icon
                    assistiveText={{ label: 'Font size' }}
                    category="utility"
                    name="type_tool"
                    size="xx-small"
                  />
                  <Icon
                    assistiveText={{ label: 'Font size' }}
                    category="utility"
                    name="type_tool"
                    size="small"
                  /> */}
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


            align="bottom"
          >
            <Button label="Accessibility options" />
          </Popover>
        </GlobalNavigationBarRegion>
      </GlobalNavigationBar>

    )
  }
}
