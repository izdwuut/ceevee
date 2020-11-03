/** @jsx jsx */
import React from 'react';
import CreateCV from './pages/ui/createcv/template/CreateCV'
import CVList from './pages/ui/cvlist/template/CVList'

import { connect } from 'react-redux'
import './CreateCVApp.css'
import { jsx, Global } from '@emotion/core';
import highContrastTheme from './styles/highContrastTheme'
import defaultTheme from './styles/defaultTheme'
import MainContext from './index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Modal} from './pages/ui/components/Modal'

export class CreateCVApp extends React.Component {
  theme = null



  getTheme() {
    return this.props.isHighContrastMode ? highContrastTheme : defaultTheme
  }
  render() {
    return (
      <div>
        <Global styles={this.getTheme()} />
        <Router>
          <Switch>
            <Route path="/cv/edit/:id" component={CreateCV} />
            <Route path="/cv/list" component={CVList} />
          </Switch>
        </Router>
        <Modal />
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