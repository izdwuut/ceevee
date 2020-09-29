import * as actions from './actionTypes'

export const updatePreview = update => ({
    type: actions.UPDATE_PREVIEW,
    payload: {
        update: update
    }
})

export const updatePreviousBlob = blob => ({
    type: actions.UPDATE_PREVIOUS_BLOB,
    payload: {
        blob: blob
    }
})

export const updateNextBlob = blob => ({
    type: actions.UPDATE_NEXT_BLOB,
    payload: {
        blob: blob
    }
})
