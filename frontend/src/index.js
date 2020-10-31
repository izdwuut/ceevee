/** @jsx jsx */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CreateCVApp } from './CreateCVApp';
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainContext from './CreateCVApp'
import { IconSettings } from '@salesforce/design-system-react'
import { jsx, css } from '@emotion/core';

const defaultTheme = css``
const highContrastTheme = css`
  background-color: black;
  color: white;

  label {
    color: white;
  }

  a,
  a:hover,
  a:focus,
  .slds-dropdown__item a:hover,
  .slds-dropdown__item a:focus {
    color: yellow;
  }

  .header {
    background-color: black;
  }

  .slds-button{
    color: yellow;
    background-color: #282828;
    border-color: #A0A0A0;
  }

  .slds-dropdown,
  .slds-popover {
    background-color: #282828;
  }

  .slds-dropdown__item a:hover,
  .slds-dropdown__item a:focus,
   {
    background-color: #3D3D3D
  }

  .slds-dropdown__item a,
  .slds-popover,
  .slds-form-element__label,
  .slds-checkbox_off,
  .slds-checkbox_on {
    color: white
  }

  .slds-button:hover:not(:disabled),
  .slds-button:focus   {
    background-color: #3D3D3D;
    color: yellow;
    border-color: yellow
  }

  .slds-button:focus,
  .slds-input:focus,
  .slds-textarea:focus {
    box-shadow: var(--sds-c-button-shadow-focus,0 0 3px yellow)
  }

  .slds-input:focus,
  .slds-textarea:focus {
    background-color: #3D3D3D;
    border-color: yellow
  }

  .slds-button:disabled {
    background-color: black;
    color: #white;
  }

  .slds-page-header,
  .slds-card {
    background-color: #0F0F0F;
    border-color: #A0A0A0;
  }   

  .header-action-icon {
    fill: yellow;
  }

  .slds-context-bar__item.slds-is-active::before {
    background-color: yellow; 
  }

  .slds-context-bar__item.slds-is-active,
  .slds-context-bar__item:hover{
    background-color: #070707 !important;
  }

  .slds-popover {
    
  }

  .slds-input,
  .slds-textarea {
    background-color: #282828;
    border-color: #A0A0A0;
  }

  .slds-context-bar {
    border-bottom: 3px solid yellow;
  }

  
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} context={MainContext}>
      <IconSettings iconPath="/icons">
        <div css={highContrastTheme}>
          <CreateCVApp />
        </div>
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
