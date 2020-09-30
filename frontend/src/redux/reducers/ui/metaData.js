import * as actions from '../../actions/ui/metaData/actionTypes'

const initialState = {
    firstName: 'Lorem',
    middleName: 'Ipsum',
    lastName: 'Dolor',
    position: 'Position',
    email: 'E-mail',
    mobile: "000000000",
    country: 'Lorem',
    city: 'Ipsum',
    drivingLicense: 'Yes',
    birthDate: '0000-00-00'
}

export default function metaData(state = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_FIRST_NAME: {
            return {
                ...state,
                firstName: action.payload.firstName
            }
        }
        case actions.UPDATE_MIDDLE_NAME: {
            return {
                ...state,
                middleName: action.payload.middleName
            }
        }
        case actions.UPDATE_LAST_NAME: {
            return {
                ...state,
                lastName: action.payload.lastName
            }
        }
        case actions.UPDATE_POSITION: {
            return {
                ...state,
                position: action.payload.position
            }
        }
        case actions.UPDATE_EMAIL: {
            return {
                ...state,
                email: action.payload.email
            }
        }
        case actions.UPDATE_MOBILE: {
            return {
                ...state,
                mobile: action.payload.mobile
            }
        }
        case actions.UPDATE_COUNTRY: {
            return {
                ...state,
                country: action.payload.country
            }
        }
        case actions.UPDATE_CITY: {
            return {
                ...state,
                city: action.payload.city
            }
        }
        case actions.UPDATE_DRIVING_LICENSE : {
            return {
                ...state,
                drivingLicense: action.payload.drivingLicense
            }
        }
        case actions.UPDATE_BIRTH_DATE: {
            return {
                ...state,
                birthDate: action.payload.birthDate
            }
        }
        default:
            return state;
    }
}