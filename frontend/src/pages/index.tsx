import Head from 'next/head'
import { Button } from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react'
import { Provider } from 'react-redux';
import React from 'react';

import store from 'src/store/store'
import * as Variables from 'src/env/variables'

export const MainContext = React.createContext('undefined')

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store} context={MainContext}>
          <IconSettings iconPath="/icons">
  
            <Head>
              <title>{Variables.applicationName}</title>
              <link rel="icon" href="/favicon.ico" />
              <link rel="stylesheet" type="text/css" href="/salesforce-lightning-design-system.min.css"></link>
            </Head>
  
            <main>
              <Button label="Hello Button" />
            </main>
  
            <footer>
  
            </footer>
          </IconSettings>
        </Provider>
      </div>
    )
  }
}
