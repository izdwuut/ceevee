import * as actions from './actionTypes'

const initialState = {
    header: 'Languages',
    description: "Habla español? Sprechen sie Deutsch? Mówisz po polsku? Show it off!",
    originalHeader: 'Languages',
    languages: [
    ],
    visible: false
}

export default function languages(state = initialState, action) {
    switch (action.type) {
        case actions.LANGUAGES_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }
        case actions.LANGUAGES_UPDATE_LANGUAGE: {
            let languagesCopy = [...state.languages]
            languagesCopy[action.payload.id] = action.payload.language
            return {
                ...state,
                languages: languagesCopy
            }
        }
        case actions.LANGUAGES_ADD_LANGUAGE: {
            let languagesCopy = [...state.languages]
            languagesCopy.push(action.payload.languages)
            return {
                ...state,
                languages: languagesCopy,
                visible: true
            }
        }
        case actions.LANGUAGES_DELETE_LANGUAGE: {
            let languagesCopy = [...state.languages]
            languagesCopy.splice(action.payload.id, 1)
            return {
                ...state,
                languages: languagesCopy,
                visible: languagesCopy.length > 0
            }
        }
        default:
            return state;
    }
}