export const LANGUAGES_UPDATE_HEADER = 'LANGUAGES_UPDATE_HEADER'
export const LANGUAGES_UPDATE_LANGUAGE = 'LANGUAGES_UPDATE_LANGUAGE'
export const LANGUAGES_ADD_LANGUAGE = 'LANGUAGES_ADD_LANGUAGE'
export const LANGUAGES_DELETE_LANGUAGE = 'LANGUAGES_DELETE_LANGUAGE'

export interface LanguagesState {
    header: string,
    description: string,
    originalHeader: string,
    languages: Array<string>,
    visible: boolean
}

export interface UpdateHeaderAction {
    type: typeof LANGUAGES_UPDATE_HEADER,
    payload: {
        header: string
    }
}

export interface UpdateLanguageAction {
    type: typeof LANGUAGES_UPDATE_LANGUAGE,
    payload: {
        id: number,
        language: string
    }
}

export interface AddLanguageAction {
    type: typeof LANGUAGES_ADD_LANGUAGE,
}

export interface DeleteLanguageAction {
    type: typeof LANGUAGES_DELETE_LANGUAGE,
    payload: {
        id: number
    }
}

export type LanguagesActionTypes = UpdateHeaderAction | UpdateLanguageAction | AddLanguageAction | DeleteLanguageAction
