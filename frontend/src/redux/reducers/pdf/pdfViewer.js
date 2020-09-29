import * as actions from '../../actions/pdf/pdfViewer/actionTypes'

const initialState = {
    update: false,
    // template: null,
    blob: null
}

export default function pdfViewer(state = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_PREVIEW: {
            return {
                ...state,
                update: action.payload.update
            }
        }
        case actions.UPDATE_BLOB: {
            return {
                ...state,
                blob: action.payload.blob
            }
        }
        default:
            return state;
    }
}