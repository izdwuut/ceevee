import * as Types from './types'

const initialState: Types.AccessibilityState = {
    isDarkMode: false,
    isHighContrastMode: false,
    isColorBlindMode: false,
    fontSize: 100
}

export default function accessibility(state:Types.AccessibilityState = initialState, action:Types.AccessibilityActionTypes) {
    switch (action.type) {
        case Types.ACCESSIBILITY_TOGGLE_COLOR_BLIND_MODE: {
            return {
                isColorBlindMode: !state.isColorBlindMode
            }
        }
        case Types.ACCESSIBILITY_TOGGLE_HIGH_CONTRAST_MODE: {
            return {
                isHighContrastMode: !state.isHighContrastMode
            }
        }
        case Types.ACCESSIBILITY_TOGGLE_DARK_MODE: {
            return {
                isDarkMode: !state.isDarkMode
            }
        }
        case Types.ACCESSIBILITY_RESIZE_FONT: {
            return {
                fontSize: action.payload.fontSize
            }
        }
        default:
            return state;
    }
}