import * as React from 'react';
import {
  Icon,
  InputIcon,
  Button,
  Card,
  Input,
  Accordion,
  AccordionPanel,
  Tooltip,
  Textarea,
  CardEmpty,
  Slider,
  Checkbox,
} from '@salesforce/design-system-react';
import styles from './Navigation.css'
import * as Variables from '../../../../utilities/variables'

export default class Navigation extends React.Component {
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
      <nav className="nav">
        <a href="#" rel="Go to homepage">{Variables.applicationName}</a>
        <ul class="accessibility">
          <li>
            <Checkbox
              labels={{
                label: 'Color Blind Mode',
              }}
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
          <Icon
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
						/>
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
        <Button
          label="Back to CVs list"
          iconCategory="utility"
          iconName="back"
          iconPosition="left"
        />
      </nav>
    )
  }
}
