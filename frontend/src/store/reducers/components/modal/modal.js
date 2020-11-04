import * as actions from './actionTypes'

const initialState = {
    action: null,
    title: '',
    item: '',
    isDelete: false,
    modalType: '',
    actionButtonVariant: '',
    isVisible: false
}

export default function modal(state = initialState, action) {
    switch (action.type) {
        case actions.MODAL_SHOW: {
            return {
                ...state,
                action: action.payload.action,
                title: action.payload.title,
                item: action.payload.item,
                isDelete: action.payload.isDelete,
                isVisible: action.payload.isVisible
            }
        }
        case actions.MODAL_HIDE: {
            return {
                ...state,
                action: action.payload.action,
                title: action.payload.title,
                item: action.payload.item,
                isDelete: action.payload.isDelete,
                isVisible: action.payload.isVisible
            }
        }

        default:
            return state;
    }
}