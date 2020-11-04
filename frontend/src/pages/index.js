import Head from 'next/head'
import * as Variables from 'src/env/variables'
import { Button } from '@salesforce/design-system-react';




export default function Home() {
  return (
    <div>
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
    </div>
  )
}
