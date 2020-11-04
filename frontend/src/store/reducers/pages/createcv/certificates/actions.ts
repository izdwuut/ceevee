import * as Types from './types'

export const updateHeader = (header: string): Types.UpdateHeaderAction => ({
    type: Types.CERTIFICATES_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateCertificate = (id: number, certificate: string): Types.UpdateCertificateAction => ({
    type: Types.CERTIFICATES_UPDATE_CERTIFICATE,
    payload: {
        id: id,
        certificate: certificate
    }
})

export const updateIssuer = (id: number, issuer: string): Types.UpdateIssuerAction => ({
    type: Types.CERTIFICATES_UPDATE_ISSUER,
    payload: {
        id: id,
        issuer: issuer
    }
})

export const updateValidUntil = (id: number, validUntilString: string):Types.UpdateValidUntilAction => ({
    type: Types.CERTIFICATES_UPDATE_VALID_UNTIL,
    payload: {
        id: id,
        validUntilString: validUntilString
    }
})


export const deleteCertificate = (id: number): Types.DeleteCertificateAction => ({
    type: Types.CERTIFICATES_DELETE_CERTIFICATE,
    payload: {
        id: id,
    }
})

export const addCertificate = (): Types.AddCertificateAction => ({
    type: Types.CERTIFICATES_ADD_CERTIFICATE,
})