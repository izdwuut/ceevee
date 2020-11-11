import * as Types from './types'

export const updatePreview = (update: boolean): Types.UpdatePreviewAction => ({
    type: Types.UPDATE_PREVIEW,
    payload: {
        update: update
    }
})

export const updatePreviousBlob = (blob: string): Types.UpdatePreviousBlobAction => ({
    type: Types.UPDATE_PREVIOUS_BLOB,
    payload: {
        blob: blob
    }
})

export const updateNextBlob = (blob: string): Types.UpdateNextBlobAction => ({
    type: Types.UPDATE_NEXT_BLOB,
    payload: {
        blob: blob
    }
})
