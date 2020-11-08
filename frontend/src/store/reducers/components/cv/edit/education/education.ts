import * as Types from './types'
import { getValidatedDate } from 'src/utilities/date'

const initialState: Types.EducationState = {
    header: 'Education',
    description: "From high school to university, your education is one of the most valuable assets.",
    originalHeader: 'Education',
    education: [],
    visible: false
}

export default function education(state: Types.EducationState = initialState, action: Types.EducationActionTypes) {
    switch (action.type) {
        case Types.EDUCATION_UPDATE_HEADER: {
            return {
                header: action.payload.header
            }
        }

        case Types.EDUCATION_UPDATE_COURSE: {
            let educationCopy: Array<Types.Education>  = [...state.education]
            educationCopy[action.payload.id].course = action.payload.course
            return {
                education: educationCopy
            }
        }

        case Types.EDUCATION_UPDATE_SCHOOL: {
            let educationCopy: Array<Types.Education> = [...state.education]
            educationCopy[action.payload.id].school = action.payload.school
            return {
                education: educationCopy
            }
        }

        case Types.EDUCATION_UPDATE_TITLE: {
            let educationCopy: Array<Types.Education> = [...state.education]
            educationCopy[action.payload.id].title = action.payload.title
            return {
                education: educationCopy
            }
        }

        case Types.EDUCATION_UPDATE_CITY: {
            let educationCopy: Array<Types.Education> = [...state.education]
            educationCopy[action.payload.id].city = action.payload.city
            return {
                education: educationCopy
            }
        }

        case Types.EDUCATION_UPDATE_COUNTRY: {
            let educationCopy: Array<Types.Education> = [...state.education]
            educationCopy[action.payload.id].country = action.payload.country 
            return {
                education: educationCopy
            }
        }

        case Types.EDUCATION_UPDATE_FROM_DATE: {
            return {
                education: getValidatedDate(state.education, 'fromDate', action)
            }
        }

        case Types.EDUCATION_UPDATE_TO_DATE: {
            return {
                education: getValidatedDate(state.education, 'toDate', action)
            }
        }

        case Types.EDUCATION_UPDATE_DESCRIPTION: {
            let educationCopy: Array<Types.Education> = [...state.education]
            educationCopy[action.payload.id].description = action.payload.description
            return {
                education: educationCopy
            }
        }

        case Types.EDUCATION_ADD_EDUCATION: {
            let educationCopy: Array<Types.Education> = [...state.education]
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
                education: educationCopy,
                visible: true
            }
        }
        case Types.EDUCATION_DELETE_EDUCATION: {
            let educationCopy: Array<Types.Education> = [...state.education]
            educationCopy.splice(action.payload.id, 1)
            return {
                education: educationCopy,
                visible: educationCopy.length > 0
            }
        }
        default:
            return state;
    }
}