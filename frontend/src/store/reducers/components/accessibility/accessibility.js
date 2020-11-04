import * as actions from './actionTypes'

const initialState = {
    isDarkMode: false,
    isHighContrastMode: false,
    isColorBlindMode: false,
    fontSize: 100
}

export default function accessibility(state = initialState, action) {
    switch (action.type) {
        case actions.ACCESSIBILITY_TOGGLE_COLOR_BLIND_MODE: {
            return {
                ...state,
                isColorBlindMode: !state.isColorBlindMode
            }
        }
        case actions.ACCESSIBILITY_TOGGLE_HIGH_CONTRAST_MODE: {
            return {
                ...state,
                isHighContrastMode: !state.isHighContrastMode
            }
        }
        case actions.ACCESSIBILITY_TOGGLE_DARK_MODE: {
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            }
        }
        case actions.ACCESSIBILITY_RESIZE_FONT: {
            return {
                ...state,
                fontSize: action.payload.fontSize
            }
        }
        default:
            return state;
    }
}