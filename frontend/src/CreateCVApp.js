/** @jsx jsx */

import React from 'react';
import CreateCV from './components/ui/createcv/template/CreateCV'
import { Provider } from 'react-redux'
import store from './redux/store'
import './CreateCVApp.css'
import { jsx } from '@emotion/core';
import highContrastTheme from './styles/highContrastTheme'
import defaultTheme from './styles/defaultTheme'

const MainContext = React.createContext()
export default MainContext;

export class CreateCVApp extends React.Component {
  render() {
    return (
      <div css={highContrastTheme}>
        <CreateCV />
      </div>

    )
  }
}