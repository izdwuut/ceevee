import React from 'react'
import App from 'next/app'

export default class CreateCVApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}
