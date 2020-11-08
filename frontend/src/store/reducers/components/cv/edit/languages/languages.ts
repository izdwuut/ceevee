import * as Types from './types'

const initialState: Types.LanguagesState = {
    header: 'Languages',
    description: "Habla español? Sprechen sie Deutsch? Mówisz po polsku? Show it off!",
    originalHeader: 'Languages',
    languages: [
    ],
    visible: false
}

export default function languages(state: Types.LanguagesState = initialState, action: Types.LanguagesActionTypes) {
    switch (action.type) {
        case Types.LANGUAGES_UPDATE_HEADER: {
            return {
                header: action.payload.header
            }
        }
        case Types.LANGUAGES_UPDATE_LANGUAGE: {
            let languagesCopy = [...state.languages]
            languagesCopy[action.payload.id] = action.payload.language
            return {
                languages: languagesCopy
            }
        }
        case Types.LANGUAGES_ADD_LANGUAGE: {
            let languagesCopy = [...state.languages]
            languagesCopy.push('')
            return {
                languages: languagesCopy,
                visible: true
            }
        }
        case Types.LANGUAGES_DELETE_LANGUAGE: {
            let languagesCopy = [...state.languages]
            languagesCopy.splice(action.payload.id, 1)
            return {
                languages: languagesCopy,
                visible: languagesCopy.length > 0
            }
        }
        default:
            return state;
    }
}