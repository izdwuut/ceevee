import * as actions from '../../actions/ui/languages/actionTypes'

const initialState = {
    header: 'Languages',
    originalHeader: 'Languages',
    languages: [
    ],
    visible: false
}

export default function hobbies(state = initialState, action) {
    switch (action.type) {
        case actions.LANGUAGES_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }
        case actions.LANGUAGES_UPDATE_LANGUAGE: {
            let languagesCopy = [...state.languages]
            languagesCopy.push(action.payload.language)
            return {
                ...state,
                languages: languagesCopy
            }
        }
        default:
            return state;
    }
}