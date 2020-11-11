export const TOASTS_SHOW = 'TOASTS_SHOW'
export const TOASTS_HIDE = 'TOASTS_HIDE'

export interface Toast {
    heading: string,
    variant: string,
}

export interface ToastsState {
    toasts: Array<Toast>
}

export interface ShowToastAction {
    type: typeof TOASTS_SHOW,
    payload: {
        heading: string,
        variant: string
    }
}

export interface HideToastAction {
    type: typeof TOASTS_HIDE,
    payload: {
        id: number
    }
}

export type ToastsActionTypes = ShowToastAction | HideToastAction
