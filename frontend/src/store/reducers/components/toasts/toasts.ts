import * as Types from './types'

const initialState: Types.ToastsState = {
    toasts: []
}

export default function toasts(state: Types.ToastsState = initialState, action: Types.ToastsActionTypes) {
    switch (action.type) {
        case Types.TOASTS_SHOW: {
            let toastsCopy: Array<Types.Toast> = [...state.toasts]
            toastsCopy.push({
                heading: action.payload.heading,
                variant: action.payload.variant,
            })
            return {
                ...state,
                toasts: toastsCopy,
            }
        }
        case Types.TOASTS_HIDE: {
            let toastsCopy: Array<Types.Toast> = [...state.toasts]
            toastsCopy[action.payload.id] = null
            return {
                ...state,
                toasts: toastsCopy
            }
        }
        default:
            return state;
    }
}
