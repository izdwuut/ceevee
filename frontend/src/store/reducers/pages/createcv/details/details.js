import * as actions from './actionTypes'

const initialState = {
    header: 'Details',
    description: 'Various settings related to you. Let the employer know a little more about you!',
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

export default function details(state = initialState, action) {
    switch (action.type) {
        case actions.DETAILS_UPDATE_FIRST_NAME: {
            return {
                ...state,
                firstName: action.payload.firstName
            }
        }
        case actions.DETAILS_UPDATE_MIDDLE_NAME: {
            return {
                ...state,
                middleName: action.payload.middleName
            }
        }
        case actions.DETAILS_UPDATE_LAST_NAME: {
            return {
                ...state,
                lastName: action.payload.lastName
            }
        }
        case actions.DETAILS_UPDATE_POSITION: {
            return {
                ...state,
                position: action.payload.position
            }
        }
        case actions.DETAILS_UPDATE_EMAIL: {
            return {
                ...state,
                email: action.payload.email
            }
        }
        case actions.DETAILS_UPDATE_MOBILE: {
            return {
                ...state,
                mobile: action.payload.mobile
            }
        }
        case actions.DETAILS_UPDATE_COUNTRY: {
            return {
                ...state,
                country: action.payload.country
            }
        }
        case actions.DETAILS_UPDATE_CITY: {
            return {
                ...state,
                city: action.payload.city
            }
        }
        case actions.DETAILS_UPDATE_DRIVING_LICENSE : {
            return {
                ...state,
                drivingLicense: action.payload.drivingLicense
            }
        }
        case actions.DETAILS_UPDATE_BIRTH_DATE: {
            return {
                ...state,
                birthDate: action.payload.birthDate
            }
        }
        default:
            return state;
    }
}