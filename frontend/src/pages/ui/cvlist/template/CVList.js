import * as React from 'react';
import MainContext from '../../../../index';

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
  PageHeader,
  PageHeaderControl

} from '@salesforce/design-system-react';
import { connect } from 'react-redux'
import Header from '../../components/header/Header'
import './CVList.css'
import { getAdd } from '../../../../utilities/ui'
export default class CVList extends React.Component {
  render() {

    return (
      <div className="container">
        <Header />
        <div class="contents">
          <PageHeader
            icon={
              <Icon
                assistiveText={{
                  label: 'CV',
                }}
                category="doctype"
                name="unknown"
                style={{

                  fill: '#ffffff',
                }}
                title="CV"
              />
            }
            className="page-header"
            title="CV List"
            info={<div className="description">
              A list of CVs you've created. You can edit title, go to editing, clone, delete and download the documents.
              <br /><br />
              Next to each CV is a graphical representation of a PDF to be created. Because of it's size, it's a bit undecipherable, but we believe it's enough for a sneak peak. Once opened, the CV editing view provides a preview with more detail.
          </div>}
            truncate
            variant="object-home"
            onRenderActions={() => {
              return (
                <PageHeaderControl>

                  <Button
                    label="Create new CV"
                    iconCategory="utility"
                    iconName="add"
                    iconPosition="left"
                  />

                </PageHeaderControl>
              )
            }

            }
          />
        </div>
      </div>

    )
  }
}

