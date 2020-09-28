import * as actions from './actionTypes'

export const updateFirstName = firstName => ({
    type: actions.UPDATE_FIRST_NAME,
    payload: {
        firstName: firstName
    }
})
