import React from 'react';
import CreateCV from './components/ui/templates/CreateCV/CreateCV'
import { Provider } from 'react-redux'
import store from './redux/store'

const MainContext = React.createContext()

export default MainContext;

export class CreateCVApp extends React.Component {
  render() {
    return (
        <CreateCV />
    )
  }
}