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

export const addLanguage = language => ({
    type: actions.LANGUAGES_ADD_LANGUAGE,
    payload: {
        language: language
    }
})

export const deleteLanguage = id => ({
    type: actions.LANGUAGES_DELETE_LANGUAGE,
    payload: {
        id: id
    }
})

