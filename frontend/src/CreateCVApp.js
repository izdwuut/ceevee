/** @jsx jsx */

import React from 'react';
import CreateCV from './components/ui/createcv/template/CreateCV'
import { Provider } from 'react-redux'
import store from './redux/store'
import './CreateCVApp.css'
import { jsx } from '@emotion/core';
import highContrastTheme from './styles/highContrastTheme'
import defaultTheme from './styles/defaultTheme'
import { connect } from "react-redux"
import * as Actions from './redux/reducers/ui/accessibility/actions'
import MainContext from './index'

export class CreateCVApp extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
  }

  render() {
    return (
      <div css={highContrastTheme}>
        <CreateCV />
      </div>

    )
  }
}

const mapStateToProps = state => {
  return state.accessibility
}

export default connect(
  mapStateToProps,
  null,
  null,
  { context: MainContext }
)(CreateCVApp)