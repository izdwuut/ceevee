import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux';
import { IconSettings } from '@salesforce/design-system-react'

import Accessibility from 'src/components/Accessibility'
import { store } from 'src/store/store'
import { MainContext } from './_document'
import {Toasts} from 'src/components/Toasts'
import { Modal } from 'src/components/Modal';

export default class CreateCVApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <IconSettings iconPath="/icons">
        <Provider store={store} context={MainContext}>
          <Accessibility context={MainContext}>
            <Component {...pageProps} context={MainContext} />
            <Toasts context={MainContext} />
            <Modal context={MainContext} />
          </Accessibility>
        </Provider>
      </IconSettings>
    )
  }
}

