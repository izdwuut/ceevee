import * as actions from './actionTypes'

const initialState = {
    update: false,
    // template: null,
    previousBlob: null,
    nextBlob: null
}

export default function pdfViewer(state = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_PREVIEW: {
            return {
                ...state,
                update: action.payload.update
            }
        }
        case actions.UPDATE_PREVIOUS_BLOB: {
            return {
                ...state,
                previousBlob: action.payload.blob
            }
        }
        case actions.UPDATE_NEXT_BLOB: {
            return {
                ...state,
                nextBlob: action.payload.blob
            }
        }
        default:
            return state;
    }
}