import * as Types from './types'

export const updateHeader = (header: string): Types.UpdateHeaderAction => ({
    type: Types.LANGUAGES_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateLanguage = (id: number, language: string): Types.UpdateLanguageAction => ({
    type: Types.LANGUAGES_UPDATE_LANGUAGE,
    payload: {
        id: id,
        language: language
    }
})

export const addLanguage = (): Types.AddLanguageAction => ({
    type: Types.LANGUAGES_ADD_LANGUAGE,
})

export const deleteLanguage = (id: number): Types.DeleteLanguageAction => ({
    type: Types.LANGUAGES_DELETE_LANGUAGE,
    payload: {
        id: id
    }
})
