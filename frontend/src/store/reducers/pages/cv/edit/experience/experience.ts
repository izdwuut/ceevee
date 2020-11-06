import * as Types from './types'
import { getValidatedDate } from 'src/utilities/date'

const initialState: Types.ExperienceState = {
    header: 'Experience',
    description: "The core of every CV. Don't hesitate to add anything related to the position you're applying for.",
    originalHeader: 'Experience',
    experience: [],
    visible: false
}

export default function experience(state: Types.ExperienceState = initialState, action: Types.ExperienceActionTypes) {
    switch (action.type) {
        case Types.EXPERIENCE_UPDATE_HEADER: {
            return {
                header: action.payload.header
            }
        }

        case Types.EXPERIENCE_UPDATE_POSITION: {
            let experienceCopy: Array<Types.Experience> = [...state.experience]
            experienceCopy[action.payload.id].position = action.payload.position
            return {
                experience: experienceCopy
            }
        }

        case Types.EXPERIENCE_UPDATE_COMPANY: {
            let experienceCopy: Array<Types.Experience> = [...state.experience]
            experienceCopy[action.payload.id].company = action.payload.company || experienceCopy[action.payload.id].company
            return {
                experience: experienceCopy
            }
        }

        case Types.EXPERIENCE_UPDATE_CITY: {
            let experienceCopy: Array<Types.Experience> = [...state.experience]
            experienceCopy[action.payload.id].city = action.payload.city 
            return {
                experience: experienceCopy
            }
        }

        case Types.EXPERIENCE_UPDATE_COUNTRY: {
            let experienceCopy: Array<Types.Experience> = [...state.experience]
            experienceCopy[action.payload.id].country = action.payload.country 
            return {
                experience: experienceCopy
            }
        }

        case Types.EXPERIENCE_UPDATE_FROM_DATE: {
            return {
                experience: getValidatedDate(state.experience, 'fromDate', action)
            }
        }

        case Types.EXPERIENCE_UPDATE_TO_DATE: {
            return {
                experience: getValidatedDate(state.experience, 'toDate', action)
            }
        }

        case Types.EXPERIENCE_UPDATE_DESCRIPTION: {
            let experienceCopy: Array<Types.Experience> = [...state.experience]
            experienceCopy[action.payload.id].description = action.payload.description
            return {
                experience: experienceCopy
            }
        }

        case Types.EXPERIENCE_ADD_EXPERIENCE: {
            let experienceCopy: Array<Types.Experience> = [...state.experience]
            experienceCopy.push({
                position: '',
                company: '',
                city: '',
                country: '',
                fromDate: '',
                toDate: '',
                fromDateString: '',
                toDateString: '',
                description: ''
            })
            return {
                experience: experienceCopy,
                visible: true
            }
        }
        case Types.EXPERIENCE_DELETE_EXPERIENCE: {
            let experienceCopy: Array<Types.Experience> = [...state.experience]
            experienceCopy.splice(action.payload.id, 1)
            return {
                experience: experienceCopy,
                visible: experienceCopy.length > 0
            }
        }
        default:
            return state;
    }
}