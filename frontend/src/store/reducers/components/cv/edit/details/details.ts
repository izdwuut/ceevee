import * as Types from './types'

const initialState: Types.DetailsState = {
    header: 'Details',
    description: 'Various settings related to you. Let the recruiter know a little more about you!',
    firstName: '',
    middleName: '',
    lastName: '',
    position: '',
    email: '',
    mobile: '',
    country: '',
    city: '',
    drivingLicense: '',
    birthDate: ''
}

export default function details(state: Types.DetailsState = initialState, action: Types.DetailsActionTypes) {
    switch (action.type) {
        case Types.DETAILS_UPDATE_FIRST_NAME: {
            return {
                ...state,
                firstName: action.payload.firstName
            }
        }
        case Types.DETAILS_UPDATE_MIDDLE_NAME: {
            return {
                ...state,
                middleName: action.payload.middleName
            }
        }
        case Types.DETAILS_UPDATE_LAST_NAME: {
            return {
                ...state,
                lastName: action.payload.lastName
            }
        }
        case Types.DETAILS_UPDATE_POSITION: {
            return {
                ...state,
                position: action.payload.position
            }
        }
        case Types.DETAILS_UPDATE_EMAIL: {
            return {
                ...state,
                email: action.payload.email
            }
        }
        case Types.DETAILS_UPDATE_MOBILE: {
            return {
                ...state,
                mobile: action.payload.mobile
            }
        }
        case Types.DETAILS_UPDATE_COUNTRY: {
            return {
                ...state,
                country: action.payload.country
            }
        }
        case Types.DETAILS_UPDATE_CITY: {
            return {
                ...state,
                city: action.payload.city
            }
        }
        case Types.DETAILS_UPDATE_DRIVING_LICENSE: {
            return {
                ...state,
                drivingLicense: action.payload.drivingLicense
            }
        }
        case Types.DETAILS_UPDATE_BIRTH_DATE: {
            return {
                ...state,
                birthDate: action.payload.birthDate
            }
        }
        default:
            return state;
    }
}