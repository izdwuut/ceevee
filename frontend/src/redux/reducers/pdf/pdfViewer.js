import * as actions from '../../actions/pdf/pdfViewer/actionTypes'

const initialState = {
    update: false
}

export default function pdfViewer(state = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_PREVIEW: {
            return {
                ...state,
                update: action.payload.update
            }
        }
        default:
            return state;
    }
}