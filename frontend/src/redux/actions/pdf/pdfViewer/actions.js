import * as actions from './actionTypes'

export const updatePreview = update => ({
    type: actions.UPDATE_PREVIEW,
    payload: {
        update: update
    }
})

export const updateBlob = blob => ({
    type: actions.UPDATE_BLOB,
    payload: {
        blob: blob
    }
})
