import * as actions from './actionTypes'
import { formatterDateFormat } from '../../../../utilities/variables'
import moment from 'moment'

const initialState = {
    header: 'Education',
    originalHeader: 'Education',
    certificates: [],
    visible: false
}

export default function certificates(state = initialState, action) {
    switch (action.type) {
        case actions.CERTIFICATES_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }

        case actions.CERTIFICATES_UPDATE_CERTIFICATE: {
            let certificatesCopy = [...state.certificates]
            certificatesCopy[action.payload.id].certificate = action.payload.certificate
            return {
                ...state,
                certificates: certificatesCopy
            }
        }

        case actions.CERTIFICATES_UPDATE_ISSUER: {
            let certificatesCopy = [...state.certificates]
            certificatesCopy[action.payload.id].issuer = action.payload.issuer
            return {
                ...state,
                certificates: certificatesCopy
            }
        }

        case actions.CERTIFICATES_UPDATE_VALID_UNTIL: {
            let certificatesCopy = [...state.certificates]
            if (isDateValid(action.payload.validUntilString)) {
                if (isNaN(new Date(action.payload.validUntilString))) {
                    certificatesCopy[action.payload.id].validUntilString = action.payload.validUntilString
                } else {
                    certificatesCopy[action.payload.id].validUntilString = getShortDateString(action.payload.validUntilString)
                }
                certificatesCopy[action.payload.id].validUntil = moment(certificatesCopy[action.payload.id].validUntilString, formatterDateFormat).toDate()
            } else {
                certificatesCopy[action.payload.id].validUntilString = action.payload.validUntilString

            }
            return {
                ...state,
                certificates: certificatesCopy
            }
        }

       
        case actions.CERTIFICATES_ADD_CERTIFICATE: {
            let certificatesCopy = [...state.certificates]
            certificatesCopy.push({
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
                certificates: certificatesCopy,
                visible: true
            }
        }
        case actions.CERTIFICATES_DELETE_CERTIFICATE: {
            let certificatesCopy = [...state.certificates]
            certificatesCopy.splice(action.payload.id, 1)
            return {
                ...state,
                certificates: certificatesCopy,
                visible: certificatesCopy.length > 0
            }
        }
        default:
            return state;
    }
}