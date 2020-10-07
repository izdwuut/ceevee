import * as actions from './actionTypes'

export const updateGDPA = gdpa => ({
    type: actions.GDPA_UPDATE_GDPA,
    payload: {
        gdpa: gdpa
    }
})
