import React from 'react'
import { IconSettings } from '@salesforce/design-system-react'
import { wrapper } from 'src/store/store'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'

class CreateCVApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  render() {
    const { Component, pageProps, store } = this.props as any
    return (<Container>
      <Provider store={store}>
        <IconSettings iconPath="/icons">
          <Component {...pageProps} />
        </IconSettings>
      </Provider>
    </Container>)
  }
}

export default wrapper.withRedux(CreateCVApp)
