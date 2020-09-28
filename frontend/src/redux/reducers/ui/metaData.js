import * as actions from '../../actions/ui/metaData/actionTypes'

const initialState = {
    firstName: 'Lorem',
}

export default function metaData(state = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_FIRST_NAME: {
            return {
                ...state,
                firstName: action.payload.firstName
            }
        }
        default:
            return state;
    }
}