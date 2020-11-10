import * as Types from './types'

export const updateGdpa = (gdpa: string): Types.GDPAActionTypes => ({
    type: Types.GDPA_UPDATE_GDPA,
    payload: {
        gdpa: gdpa
    }
})
