import * as actions from '../../actions/pdf/hobbies/actionTypes'

const initialState = {
    header: 'Hobbies',
    originalHeader: 'Hobbies',
    hobbies: [
    ],
    visible: false
}

export default function hobbies(state = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }
        case actions.UPDATE_HOBBY: {
            let hobbiesCopy = [...state.hobbies]
            hobbiesCopy[action.payload.id] = action.payload.hobby || hobbiesCopy[action.payload.id]
            return {
                ...state,
                hobbies: hobbiesCopy
            }
        }
        case actions.ADD_HOBBY: {
            let hobbiesCopy = [...state.hobbies]
            hobbiesCopy.push(action.payload.hobby)
            return {
                ...state,
                hobbies: hobbiesCopy,
                visible: true
            }
        }
        case actions.DELETE_HOBBY: {
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