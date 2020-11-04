import * as actions from './actionTypes'

export const updateGdpa = gdpa => ({
    type: actions.GDPA_UPDATE_GDPA,
    payload: {
        gdpa: gdpa
    }
})
