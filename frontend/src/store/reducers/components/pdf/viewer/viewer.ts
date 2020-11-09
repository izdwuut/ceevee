import * as Types from './types'

const initialState: Types.ViewerState = {
    update: false,
    // template: null,
    previousBlob: null,
    nextBlob: null
}

export default function pdfViewer(state: Types.ViewerState = initialState, action: Types.PdfViewerActionTypes) {
    switch (action.type) {
        case Types.UPDATE_PREVIEW: {
            return {
                ...state,
                update: action.payload.update
            }
        }
        case Types.UPDATE_PREVIOUS_BLOB: {
            return {
                ...state,
                previousBlob: action.payload.blob
            }
        }
        case Types.UPDATE_NEXT_BLOB: {
            return {
                ...state,
                nextBlob: action.payload.blob
            }
        }
        default:
            return state;
    }
}