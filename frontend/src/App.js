import React from 'react';
import ReactDOM  from 'react-dom';
import UI from './components/ui/templates/GenerateCV'
import { Provider } from 'react-redux'
import store from './redux/store'

export default class App extends React.Component {
  render() {
    return (
      <UI />
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)