import * as actions from './actionTypes'


export const showToast = (heading, variant = 'info') => ({
    type: actions.TOASTS_SHOW,
    payload: {
        heading: heading,
       variant: variant
    }
})

export const hideToast = id => ({
    type: actions.TOASTS_HIDE,
    payload: {
       id: id
    }
})