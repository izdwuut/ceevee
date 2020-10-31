import * as actions from './actionTypes'

const initialState = {
    header: 'Hobbies',
    originalHeader: 'Hobbies',
    description: "Books? Movies? Vigorously scrolling through Reddit looking for dank memes? We don't judge.",
    hobbies: [
    ],
    visible: false
}

export default function hobbies(state = initialState, action) {
    switch (action.type) {
        case actions.HOBBIES_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }
        case actions.HOBBIES_UPDATE_HOBBY: {
            let hobbiesCopy = [...state.hobbies]
            hobbiesCopy[action.payload.id] = action.payload.hobby || hobbiesCopy[action.payload.id]
            return {
                ...state,
                hobbies: hobbiesCopy
            }
        }
        case actions.HOBBIES_ADD_HOBBY: {
            let hobbiesCopy = [...state.hobbies]
            hobbiesCopy.push(action.payload.hobby)
            return {
                ...state,
                hobbies: hobbiesCopy,
                visible: true
            }
        }
        case actions.HOBBIES_DELETE_HOBBY: {
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