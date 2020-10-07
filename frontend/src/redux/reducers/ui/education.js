import * as actions from '../../actions/ui/education/actionTypes'
import { isDateValid, getShortDateString } from '../../../utilities/date'
import { formatterDateFormat } from '../../../utilities/variables'
import moment from 'moment'

const initialState = {
    header: 'Education',
    originalHeader: 'Education',
    education: [],
    visible: false
}

export default function education(state = initialState, action) {
    switch (action.type) {
        case actions.EDUCATION_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }

        case actions.EDUCATION_UPDATE_SCHOOL: {
            let educationCopy = [...state.education]
            educationCopy[action.payload.id].school = action.payload.school || educationCopy[action.payload.id].school
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_UPDATE_TITLE: {
            let educationCopy = [...state.education]
            educationCopy[action.payload.id].title = action.payload.title || educationCopy[action.payload.id].title
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_UPDATE_CITY: {
            let educationCopy = [...state.education]
            educationCopy[action.payload.id].city = action.payload.city || educationCopy[action.payload.id].city
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_UPDATE_COUNTRY: {
            let educationCopy = [...state.education]
            educationCopy[action.payload.id].country = action.payload.country || educationCopy[action.payload.id].country
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_UPDATE_FROM_DATE: {
            let educationCopy = [...state.education]
            if (isDateValid(action.payload.fromDateString)) {
                if (isNaN(new Date(action.payload.fromDateString))) {
                    educationCopy[action.payload.id].fromDateString = action.payload.fromDateString
                } else {
                    educationCopy[action.payload.id].fromDateString = getShortDateString(action.payload.fromDateString)
                }
                educationCopy[action.payload.id].fromDate = moment(educationCopy[action.payload.id].fromDateString, formatterDateFormat).toDate()
            } else {
                educationCopy[action.payload.id].fromDateString = action.payload.fromDateString

            }
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_UPDATE_TO_DATE: {
            let educationCopy = [...state.education]
            if (isDateValid(action.payload.toDateString)) {
                if (isNaN(new Date(action.payload.toDateString))) {
                    educationCopy[action.payload.id].toDateString = action.payload.toDateString
                } else {
                    educationCopy[action.payload.id].toDateString = getShortDateString(action.payload.toDateString)
                }
                educationCopy[action.payload.id].toDate = moment(educationCopy[action.payload.id].toDateString, formatterDateFormat).toDate()
            } else {
                educationCopy[action.payload.id].toDateString = action.payload.toDateString

            }
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_UPDATE_DESCRIPTION: {
            let educationCopy = [...state.education]
            educationCopy[action.payload.id].description = action.payload.description || educationCopy[action.payload.id].description
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_ADD_EDUCATION: {
            let educationCopy = [...state.education]
            educationCopy.push({
                school: '',
                title: '',
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
                ...state,
                education: educationCopy,
                visible: true
            }
        }
        case actions.EDUCATION_DELETE_EDUCATION: {
            let educationCopy = [...state.education]
            educationCopy.splice(action.payload.id, 1)
            return {
                ...state,
                education: educationCopy,
                visible: educationCopy.length > 0
            }
        }
        default:
            return state;
    }
}