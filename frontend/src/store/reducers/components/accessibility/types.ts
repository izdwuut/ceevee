export const ACCESSIBILITY_TOGGLE_COLOR_BLIND_MODE = 'ACCESSIBILITY_TOGGLE_COLOR_BLIND_MODE'
export const ACCESSIBILITY_TOGGLE_HIGH_CONTRAST_MODE = 'ACCESSIBILITY_TOGGLE_HIGH_CONTRAST_MODE'
export const ACCESSIBILITY_TOGGLE_DARK_MODE = 'ACCESSIBILITY_TOGGLE_DARK_MODE'
export const ACCESSIBILITY_RESIZE_FONT = 'ACCESSIBILITY_RESIZE_FONT'

export interface AccessibilityState {
    isDarkMode: boolean,
    isHighContrastMode: boolean,
    isColorBlindMode: boolean,
    fontSize: number,
}

export interface ToggleColorBlindModeAction {
    type: typeof ACCESSIBILITY_TOGGLE_COLOR_BLIND_MODE,
}

export interface ToggleHighContrastModeAction {
    type: typeof ACCESSIBILITY_TOGGLE_HIGH_CONTRAST_MODE,
}

export interface ToggleDarkModeAction {
    type: typeof ACCESSIBILITY_TOGGLE_DARK_MODE,
}

export interface ResizeFontAction {
    type: typeof ACCESSIBILITY_RESIZE_FONT,
    payload: {
        fontSize: number
    }
}

export type AccessibilityActionTypes = ToggleColorBlindModeAction | ToggleHighContrastModeAction | ToggleDarkModeAction | ResizeFontAction
