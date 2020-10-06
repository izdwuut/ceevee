import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.LANGUAGES_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateLanguage = (id, language) => ({
    type: actions.LANGUAGES_UPDATE_LANGUAGE,
    payload: {
        id: id,
        language: language
    }
})

export const addLanguage = () => ({
    type: actions.LANGUAGES_ADD_LANGUAGE,
    payload: {
        
    }
})

export const deleteLanguage = id => ({
    type: actions.LANGUAGES_DELETE_LANGUAGE,
    payload: {
        id: id
    }
})

