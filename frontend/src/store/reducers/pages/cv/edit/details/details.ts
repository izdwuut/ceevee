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
                firstName: action.payload.firstName
            }
        }
        case Types.DETAILS_UPDATE_MIDDLE_NAME: {
            return {
                middleName: action.payload.middleName
            }
        }
        case Types.DETAILS_UPDATE_LAST_NAME: {
            return {
                lastName: action.payload.lastName
            }
        }
        case Types.DETAILS_UPDATE_POSITION: {
            return {
                position: action.payload.position
            }
        }
        case Types.DETAILS_UPDATE_EMAIL: {
            return {
                email: action.payload.email
            }
        }
        case Types.DETAILS_UPDATE_MOBILE: {
            return {
                mobile: action.payload.mobile
            }
        }
        case Types.DETAILS_UPDATE_COUNTRY: {
            return {
                country: action.payload.country
            }
        }
        case Types.DETAILS_UPDATE_CITY: {
            return {
                city: action.payload.city
            }
        }
        case Types.DETAILS_UPDATE_DRIVING_LICENSE: {
            return {
                drivingLicense: action.payload.drivingLicense
            }
        }
        case Types.DETAILS_UPDATE_BIRTH_DATE: {
            return {
                birthDate: action.payload.birthDate
            }
        }
        default:
            return state;
    }
}