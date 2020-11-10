export const CERTIFICATES_UPDATE_HEADER = 'CERTIFICATES_UPDATE_HEADER'
export const CERTIFICATES_UPDATE_CERTIFICATE = 'CERTIFICATES_UPDATE_CERTIFICATE'
export const CERTIFICATES_UPDATE_ISSUER = 'CERTIFICATES_UPDATE_ISSUER'
export const CERTIFICATES_UPDATE_VALID_UNTIL = 'CERTIFICATES_UPDATE_VALID_UNTIL'
export const CERTIFICATES_DELETE_CERTIFICATE = 'CERTIFICATES_DELETE_CERTIFICATE'
export const CERTIFICATES_ADD_CERTIFICATE = 'CERTIFICATES_ADD_CERTIFICATE'

export interface Certificate {
    certificate: string,
    issuer: string,
    validUntilString: string,
    validUntil: string
}

export interface CertificatesState {
    header: string,
    originalHeader: string,
    description: string,
    certificates: Array<Certificate>
    visible: boolean
}

export interface UpdateHeaderAction {
    type: typeof CERTIFICATES_UPDATE_HEADER,
    payload: {
        header: string
    }
}

export interface UpdateCertificateAction {
    type: typeof CERTIFICATES_UPDATE_CERTIFICATE,
    payload: {
        id: number,
        certificate: string
    }
}

export interface UpdateIssuerAction {
    type: typeof CERTIFICATES_UPDATE_ISSUER,
    payload: {
        id: number,
        issuer: string
    }
}

export interface UpdateValidUntilAction {
    type: typeof CERTIFICATES_UPDATE_VALID_UNTIL,
    payload: {
        id: number,
        validUntilString: string
    }
}

export interface DeleteCertificateAction {
    type: typeof CERTIFICATES_DELETE_CERTIFICATE,
    payload: {
        id: number,
    }
}

export interface AddCertificateAction {
    type: typeof CERTIFICATES_ADD_CERTIFICATE,
}

export type CertificatesActionTypes = UpdateHeaderAction | UpdateCertificateAction | UpdateIssuerAction | UpdateValidUntilAction | DeleteCertificateAction | AddCertificateAction