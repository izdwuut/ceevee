import * as Types from './types'


export const toggleColorBlindMode = (): Types.ToggleColorBlindModeAction => ({
    type: Types.ACCESSIBILITY_TOGGLE_COLOR_BLIND_MODE,
})

export const toggleHighContrastMode = (): Types.ToggleHighContrastModeAction => ({
    type: Types.ACCESSIBILITY_TOGGLE_HIGH_CONTRAST_MODE,
})
export const toggleDarkMode = (): Types.ToggleDarkModeAction => ({
    type: Types.ACCESSIBILITY_TOGGLE_DARK_MODE,
})
export const resizeFont = (fontSize: number): Types.ResizeFontAction => ({
    type: Types.ACCESSIBILITY_RESIZE_FONT,
    payload: {
        fontSize: fontSize
    }
})
