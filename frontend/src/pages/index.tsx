import Head from 'next/head'
import * as Variables from 'src/env/variables'
import { Button } from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react'
import { Provider }from 'react-redux';
import store from 'src/store/store'


export default function Home() {
  return (
    <div>
      <Provider store = {store}>
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
