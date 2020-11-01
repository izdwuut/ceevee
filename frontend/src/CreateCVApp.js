/** @jsx jsx */
import React from 'react';
import CreateCV from './components/ui/createcv/template/CreateCV'
import { connect } from 'react-redux'
import './CreateCVApp.css'
import { jsx } from '@emotion/core';
import highContrastTheme from './styles/highContrastTheme'
import defaultTheme from './styles/defaultTheme'
import MainContext from './index'



export class CreateCVApp extends React.Component {
  theme = null

  

  getTheme() {
    return this.props.isHighContrastMode ? highContrastTheme : defaultTheme
  }
  render() {
    return (
      <div css={this.getTheme()}>
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