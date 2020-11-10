import * as Types from './types'

export const showToast = (heading: string, variant: string = 'info'): Types.ShowToastAction => ({
    type: Types.TOASTS_SHOW,
    payload: {
        heading: heading,
        variant: variant
    }
})

export const hideToast = (id: number): Types.HideToastAction => ({
    type: Types.TOASTS_HIDE,
    payload: {
        id: id
    }
})
