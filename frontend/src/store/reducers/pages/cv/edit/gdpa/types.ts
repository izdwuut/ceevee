export const GDPA_UPDATE_GDPA = 'GDPA_UPDATE_GDPA'

export interface GDPAState {
    header: string,
    originalHeader: string,
    description: string,
    gdpa: string,
    originalGdpa: string,
    visible: boolean
}

export interface UpdateGdpaAction {
    type: typeof GDPA_UPDATE_GDPA,
    payload: {
        gdpa: string
    }
}

export type GDPAActionTypes = UpdateGdpaAction
