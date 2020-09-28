import React from 'react';
import ReactDOM from 'react-dom';
import UI from './components/ui/templates/GenerateCV'
import { Provider } from 'react-redux'
import store from './redux/store'

export default class CreateCVApp extends React.Component {
  render() {
    return (
      <UI />
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <CreateCVApp />
  </Provider>,
  document.getElementById('root')
)