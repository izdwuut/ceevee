import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.LANGUAGES_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateLanguage = language => ({
    type: actions.LANGUAGES_UPDATE_HEADER,
    payload: {
        language: language
    }
})

