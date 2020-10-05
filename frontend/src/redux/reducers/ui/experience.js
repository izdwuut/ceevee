import * as actions from '../../actions/ui/experience/actionTypes'

const initialState = {
    header: 'Experience',
    originalHeader: 'Experience',
    experience: [],
    visible: false
}

export default function experience(state = initialState, action) {
    switch (action.type) {
        case actions.EXPERIENCE_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }

        case actions.EXPERIENCE_UPDATE_POSITION: {
            let experienceCopy = [...state.experience]
            experienceCopy[action.payload.id].position = action.payload.position || experienceCopy[action.payload.id].position
            return {
                ...state,
                experience: experienceCopy
            }
        }

        case actions.EXPERIENCE_UPDATE_COMPANY: {
            let experienceCopy = [...state.experience]
            experienceCopy[action.payload.id].company = action.payload.company || experienceCopy[action.payload.id].company
            return {
                ...state,
                experience: experienceCopy
            }
        }

        case actions.EXPERIENCE_UPDATE_CITY: {
            let experienceCopy = [...state.experience]
            experienceCopy[action.payload.id].city = action.payload.city || experienceCopy[action.payload.id].city
            return {
                ...state,
                experience: experienceCopy
            }
        }

        case actions.EXPERIENCE_UPDATE_COUNTRY: {
            let experienceCopy = [...state.experience]
            experienceCopy[action.payload.id].country = action.payload.country || experienceCopy[action.payload.id].country
            return {
                ...state,
                experience: experienceCopy
            }
        }

        case actions.EXPERIENCE_UPDATE_FROM_DATE: {
            let experienceCopy = [...state.experience]
            experienceCopy[action.payload.id].fromDate = action.payload.fromDate || experienceCopy[action.payload.id].fromDate
            return {
                ...state,
                experience: experienceCopy
            }
        }

        case actions.EXPERIENCE_UPDATE_TO_DATE: {
            let experienceCopy = [...state.experience]
            experienceCopy[action.payload.id].toDate = action.payload.toDate || experienceCopy[action.payload.id].toDate
            return {
                ...state,
                experience: experienceCopy
            }
        }

        case actions.EXPERIENCE_UPDATE_DESCRIPTION: {
            let experienceCopy = [...state.experience]
            experienceCopy[action.payload.id].description = action.payload.description || experienceCopy[action.payload.id].description
            return {
                ...state,
                experience: experienceCopy
            }
        }

        case actions.EXPERIENCE_ADD_EXPERIENCE: {
            let experienceCopy = [...state.experience]
            experienceCopy.push(action.payload.experience)
            return {
                ...state,
                experience: experienceCopy,
                visible: true
            }
        }
        case actions.EXPERIENCE_DELETE_EXPERIENCE: {
            let experienceCopy = [...state.experience]
            experienceCopy.splice(action.payload.id, 1)
            return {
                ...state,
                experience: experienceCopy,
                visible: experienceCopy.length > 0
            }
        }
        default:
            return state;
    }
}