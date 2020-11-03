import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.CERTIFICATES_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateCertificate = (id, certificate) => ({
    type: actions.CERTIFICATES_UPDATE_CERTIFICATE,
    payload: {
        id: id,
        certificate: certificate
    }
})

export const updateIssuer = (id, issuer) => ({
    type: actions.CERTIFICATES_UPDATE_ISSUER,
    payload: {
        id: id,
        issuer: issuer
    }
})

export const updateValidUntil = (id, validUntilString) => ({
    type: actions.CERTIFICATES_UPDATE_VALID_UNTIL,
    payload: {
        id: id,
        validUntilString: validUntilString
    }
})


export const deleteCertificate = id => ({
    type: actions.CERTIFICATES_DELETE_CERTIFICATE,
    payload: {
        id: id,
    }
})

export const addCertificate = () => ({
    type: actions.CERTIFICATES_ADD_CERTIFICATE,
    payload: {
        
    }
})