import * as actions from './actionTypes'


export const toggleColorBlindMode = () => ({
    type: actions.ACCESSIBILITY_TOGGLE_COLOR_BLIND_MODE,
    payload: {}
})

export const toggleHighContrastMode = () => ({
    type: actions.ACCESSIBILITY_TOGGLE_HIGH_CONTRAST_MODE,
    payload: {}
})
export const toggleDarkMode = () => ({
    type: actions.ACCESSIBILITY_TOGGLE_DARK_MODE,
    payload: {}
})
export const resizeFont = (fontSize) => ({
    type: actions.ACCESSIBILITY_RESIZE_FONT,
    payload: {
        fontSize: fontSize
    }
})
