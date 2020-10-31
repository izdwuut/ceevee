import * as actions from './actionTypes'
import { formatterDateFormat } from '../../../../utilities/variables'
import { getValidatedDate } from '../../../../utilities/date'
import moment from 'moment'

const initialState = {
    header: 'Certificates',
    originalHeader: 'Certificates',
    description: "Certificates are a great way to vouch that you have some skills. Got any? Add them here!",
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
            return {
                ...state,
                certificates: getValidatedDate(state.certificates, 'validUntil', action)
            }
        }

       
        case actions.CERTIFICATES_ADD_CERTIFICATE: {
            let certificatesCopy = [...state.certificates]
            certificatesCopy.push({
                certificate: '',
                issuer: '',
                validUntilString: '',
                validUntil: ''
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