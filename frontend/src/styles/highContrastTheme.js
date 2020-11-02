import { css } from '@emotion/core';

const mainTextColor = 'white'
const accentColor = 'yellow'
const backgroundColor = 'black'
const secondaryColor = '#0F0F0F'
const focusColor = '#161616'
const hoverColor = focusColor
const borderColor = 'white'

const highContrastTheme = css`
  body,html {
    background: black;
    color: ${mainTextColor};
  }
  label {
    ${mainTextColor};
  }

  a,
  a:hover,
  a:focus,
  .slds-dropdown__item a:hover,
  .slds-dropdown__item a:focus {
    color: ${accentColor} !important;
  }

  .header {
    background-color: ${backgroundColor};
  }

  .slds-button{
    color: ${accentColor};
    background-color: ${secondaryColor};
  }

  .slds-dropdown,
  .slds-popover {
    background-color: ${secondaryColor};
  }

  .slds-dropdown__item a:hover,
  .slds-dropdown__item a:focus
   {
    background-color: ${focusColor};
  }

  .slds-dropdown__item a,
  .slds-popover,
  .slds-form-element__label,
  .slds-checkbox_off,
  .slds-checkbox_on {
    color: ${mainTextColor}
  }

  .slds-button:hover:not(:disabled) {
    background-color: ${hoverColor};
    color: ${accentColor}
  }
  .slds-button:focus   {
    background-color: ${focusColor};
    color: ${accentColor};
    border-color: ${accentColor};
  }

  .slds-button:focus,
  .slds-input:focus,
  .slds-textarea:focus {
    box-shadow: var(--sds-c-button-shadow-focus,0 0 3px ${accentColor})
  }

  .slds-input:focus,
  .slds-textarea:focus
   {
    background-color: ${focusColor};
    border-color: ${accentColor}
  }

  .slds-input:hover,
  .slds-textarea:hover {
    background-color: ${hoverColor};
    
  }

  .slds-button:disabled {
    background-color: ${backgroundColor};
    color: #white;
  }

  .slds-page-header
   {
    background-color: ${secondaryColor};
    border-color: ${borderColor};
  }   

  
  .slds-card {
    background-color: ${backgroundColor};
    border-color: ${borderColor};
  }   

  .header-action-icon {
    fill: ${accentColor};
  }

  .slds-context-bar__item.slds-is-active::before {
    background-color: ${accentColor}; 
  }

  .slds-context-bar__item.slds-is-active,
  .slds-context-bar__item:hover{
    background-color: #070707 !important;
  }


  .slds-input,
  .slds-textarea {
    background-color: ${secondaryColor};
    border-color: ${borderColor};
  }

  .slds-context-bar {
    border-bottom: 3px solid ${accentColor};
  }

  /* Slider */
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${accentColor};
    margin-top: -14px;

  }
  
  input[type=range]::-moz-range-thumb
   {
    background: ${accentColor};
  }

  input[type=range]::-ms-thumb {
    background: ${accentColor};
  }
  
   

 

  /* Checkbox */

  .slds-checkbox_toggle .slds-checkbox_faux {
    border: 1px solid ${borderColor};
    background-color: ${secondaryColor};
  }

  .slds-checkbox_toggle .slds-checkbox_faux::after {
    background-color: ${accentColor}
  }

  .slds-checkbox_toggle .slds-checkbox_faux:hover:not(:disabled),
  .slds-checkbox_toggle .slds-checkbox_faux:focus,
  .slds-checkbox_toggle [type="checkbox"]:checked + .slds-checkbox_faux_container .slds-checkbox_faux::before   {
    background-color: ${focusColor};
    
  }

  .slds-checkbox_toggle .slds-checkbox_faux:focus {
    box-shadow: var(--sds-c-button-shadow-focus,0 0 3px ${accentColor}) !important
  }

  
  .slds-checkbox_toggle [type="checkbox"]:checked + .slds-checkbox_faux_container .slds-checkbox_faux,
  .slds-checkbox_toggle .slds-checkbox_faux:hover:not(:disabled),
  .slds-checkbox_toggle .slds-checkbox_faux:focus,
  [type="checkbox"]:focus + .slds-checkbox_faux_container .slds-checkbox_faux {
    border: 1px solid ${accentColor} !important
    
  }


  .slds-checkbox_toggle [type="checkbox"]:checked + .slds-checkbox_faux_container .slds-checkbox_faux:hover,
  .slds-checkbox_toggle [type="checkbox"]:checked + .slds-checkbox_faux_container .slds-checkbox_faux {
    background-color: ${accentColor} !important
  }

  .slds-checkbox_toggle [type="checkbox"]:checked + .slds-checkbox_faux_container .slds-checkbox_faux::after {
    border-bottom: 2px solid ${focusColor} !important;
    border-right: 2px solid ${focusColor}
  }
`

export default highContrastTheme