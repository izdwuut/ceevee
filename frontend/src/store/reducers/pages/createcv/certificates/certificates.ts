import * as Types from './types'
import { getValidatedDate } from 'src/utilities/date'

const initialState: Types.CertificatesState = {
    header: 'Certificates',
    originalHeader: 'Certificates',
    description: "Certificates are a great way to vouch that you have some skills. Got any? Add them here!",
    certificates: [],
    visible: false
}

export default function certificates(state: Types.CertificatesState = initialState, action: Types.CertificatesActionTypes) {
    switch (action.type) {
        case Types.CERTIFICATES_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }

        case Types.CERTIFICATES_UPDATE_CERTIFICATE: {
            let certificatesCopy: Array<Types.Certificate> = [...state.certificates]
            certificatesCopy[action.payload.id].certificate = action.payload.certificate
            return {
                ...state,
                certificates: certificatesCopy
            }
        }

        case Types.CERTIFICATES_UPDATE_ISSUER: {
            let certificatesCopy: Array<Types.Certificate> = [...state.certificates]
            certificatesCopy[action.payload.id].issuer = action.payload.issuer
            return {
                ...state,
                certificates: certificatesCopy
            }
        }

        case Types.CERTIFICATES_UPDATE_VALID_UNTIL: {
            return {
                ...state,
                certificates: getValidatedDate(state.certificates, 'validUntil', action)
            }
        }


        case Types.CERTIFICATES_ADD_CERTIFICATE: {
            let certificatesCopy: Array<Types.Certificate> = [...state.certificates]
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
        case Types.CERTIFICATES_DELETE_CERTIFICATE: {
            let certificatesCopy: Array<Types.Certificate> = [...state.certificates]
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