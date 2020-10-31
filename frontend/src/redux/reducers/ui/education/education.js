import * as actions from './actionTypes'
import { getValidatedDate } from '../../../../utilities/date'
import { formatterDateFormat } from '../../../../utilities/variables'
import moment from 'moment'

const initialState = {
    header: 'Education',
    description: "From high school to university, your education os one of the most valuable assets.",
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

        case actions.EDUCATION_UPDATE_COURSE: {
            let educationCopy = [...state.education]
            educationCopy[action.payload.id].course = action.payload.course
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_UPDATE_SCHOOL: {
            let educationCopy = [...state.education]
            educationCopy[action.payload.id].school = action.payload.school
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_UPDATE_TITLE: {
            let educationCopy = [...state.education]
            educationCopy[action.payload.id].title = action.payload.title
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_UPDATE_CITY: {
            let educationCopy = [...state.education]
            educationCopy[action.payload.id].city = action.payload.city
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_UPDATE_COUNTRY: {
            let educationCopy = [...state.education]
            educationCopy[action.payload.id].country = action.payload.country 
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_UPDATE_FROM_DATE: {
         
            return {
                ...state,
                education: getValidatedDate(state.education, 'fromDate', action)
            }
        }

        case actions.EDUCATION_UPDATE_TO_DATE: {
            
            return {
                ...state,
                education: getValidatedDate(state.education, 'toDate', action)
            }
        }

        case actions.EDUCATION_UPDATE_DESCRIPTION: {
            let educationCopy = [...state.education]
            educationCopy[action.payload.id].description = action.payload.description
            return {
                ...state,
                education: educationCopy
            }
        }

        case actions.EDUCATION_ADD_EDUCATION: {
            let educationCopy = [...state.education]
            educationCopy.push({
                course: '',
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