import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {CreateCVApp } from './CreateCVApp';
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainContext  from './CreateCVApp'
import {IconSettings} from '@salesforce/design-system-react'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} context={MainContext}>
    <IconSettings iconPath="/icons">
      <CreateCVApp />
      </IconSettings>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

const salesforceStyles = document.createElement("link");
salesforceStyles.rel = "stylesheet";
salesforceStyles.href = "/salesforce-lightning-design-system.min.css";
document.head.appendChild(salesforceStyles);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
