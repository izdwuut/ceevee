import * as actions from './actionTypes'

const initialState = {
    gdpa: 'Links',
    originalGdpa: 'Links',
    visible: false
}

export default function gdpa(state = initialState, action) {
    switch (action.type) {
        case actions.GDPA_UPDATE_GDPA: {
            return {
                ...state,
                gdpa: action.gdpa,
                visible: gdpa !== ''
            }
        }
        default:
            return state;
    }
}