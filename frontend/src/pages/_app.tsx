import React from 'react'
import App from 'next/app'
import { IconSettings } from '@salesforce/design-system-react'
import { Provider } from 'react-redux';
import { connect } from 'react-redux'

import store from 'src/store/store'

export const MainContext = React.createContext('undefined')

export default class CreateCVApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store} context={MainContext}>
        <IconSettings iconPath="/icons">
          <Component {...pageProps} />
        </IconSettings>
      </Provider>
    )
  }
}
