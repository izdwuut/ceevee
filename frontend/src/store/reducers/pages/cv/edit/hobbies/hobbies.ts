import * as Types from './types'

const initialState: Types.HobbiesState = {
    header: 'Hobbies',
    originalHeader: 'Hobbies',
    description: "Books? Movies? Vigorously scrolling through Reddit looking for dank memes? We don't judge.",
    hobbies: [],
    visible: false
}

export default function hobbies(state:Types.HobbiesState = initialState, action:Types.HobbiesActionTypes) {
    switch (action.type) {
        case Types.HOBBIES_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }
        case Types.HOBBIES_UPDATE_HOBBY: {
            let hobbiesCopy = [...state.hobbies]
            hobbiesCopy[action.payload.id] = action.payload.hobby || hobbiesCopy[action.payload.id]
            return {
                ...state,
                hobbies: hobbiesCopy
            }
        }
        case Types.HOBBIES_ADD_HOBBY: {
            let hobbiesCopy = [...state.hobbies]
            hobbiesCopy.push('')
            return {
                ...state,
                hobbies: hobbiesCopy,
                visible: true
            }
        }
        case Types.HOBBIES_DELETE_HOBBY: {
            let hobbiesCopy = [...state.hobbies]
            hobbiesCopy.splice(action.payload.id, 1)
            return {
                ...state,
                hobbies: hobbiesCopy,
                visible: hobbiesCopy.length > 0
            }
        }
        default:
            return state;
    }
}