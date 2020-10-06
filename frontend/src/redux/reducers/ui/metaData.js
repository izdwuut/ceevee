import * as actions from '../../actions/ui/metaData/actionTypes'

const initialState = {
    firstName: 'Lorem',
    middleName: 'Ipsum',
    lastName: 'Dolor',
    position: 'Position',
    email: 'lorem@example.com',
    mobile: "000000000",
    country: 'Lorem',
    city: 'Ipsum',
    drivingLicense: 'Yes',
    birthDate: '0000-00-00'
}

export default function metaData(state = initialState, action) {
    switch (action.type) {
        case actions.METADATA_UPDATE_FIRST_NAME: {
            return {
                ...state,
                firstName: action.payload.firstName
            }
        }
        case actions.METADATA_UPDATE_MIDDLE_NAME: {
            return {
                ...state,
                middleName: action.payload.middleName
            }
        }
        case actions.METADATA_UPDATE_LAST_NAME: {
            return {
                ...state,
                lastName: action.payload.lastName
            }
        }
        case actions.METADATA_UPDATE_POSITION: {
            return {
                ...state,
                position: action.payload.position
            }
        }
        case actions.METADATA_UPDATE_EMAIL: {
            return {
                ...state,
                email: action.payload.email
            }
        }
        case actions.METADATA_UPDATE_MOBILE: {
            return {
                ...state,
                mobile: action.payload.mobile
            }
        }
        case actions.METADATA_UPDATE_COUNTRY: {
            return {
                ...state,
                country: action.payload.country
            }
        }
        case actions.METADATA_UPDATE_CITY: {
            return {
                ...state,
                city: action.payload.city
            }
        }
        case actions.METADATA_UPDATE_DRIVING_LICENSE : {
            return {
                ...state,
                drivingLicense: action.payload.drivingLicense
            }
        }
        case actions.METADATA_UPDATE_BIRTH_DATE: {
            return {
                ...state,
                birthDate: action.payload.birthDate
            }
        }
        default:
            return state;
    }
}