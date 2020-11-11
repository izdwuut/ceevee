export const UPDATE_PREVIEW = 'UPDATE_PREVIEW'
export const UPDATE_PREVIOUS_BLOB = 'UPDATE_PREVIOUS_BLOB'
export const UPDATE_NEXT_BLOB = 'UPDATE_NEXT_BLOB'

export interface ViewerState {
    update: boolean,
    previousBlob: string,
    nextBlob: string
}

export interface UpdatePreviewAction {
    type: typeof UPDATE_PREVIEW,
    payload: {
        update: boolean
    }
}

export interface UpdatePreviousBlobAction {
    type: typeof UPDATE_PREVIOUS_BLOB,
    payload: {
        blob: string
    }
}

export interface UpdateNextBlobAction {
    type: typeof UPDATE_NEXT_BLOB,
    payload: {
        blob: string
    }
}

export type PdfViewerActionTypes = UpdatePreviewAction | UpdatePreviousBlobAction | UpdateNextBlobAction
