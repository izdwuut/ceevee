import * as actions from './actionTypes'

const initialState = {
    toasts: []
}

export default function toasts(state = initialState, action) {
    switch (action.type) {
        case actions.TOASTS_SHOW: {
            let toastsCopy = [...state.toasts]
            toastsCopy.push({
                heading: action.payload.heading,
                variant: action.payload.variant
            })
            return {
                ...state,
                toasts: toastsCopy
            }
        }
        case actions.TOASTS_HIDE: {
            let toastsCopy = [...state.toasts]
            toastsCopy.splice(action.payload.id, 1)
            return {
                ...state,
                toasts: toastsCopy
            }
        }

        default:
            return state;
    }
}