import * as Types from './types'

const initialState:Types.ModalState = {
    action: null,
    title: '',
    item: '',
    isDelete: false,
    isVisible: false
}

export default function modal(state:Types.ModalState = initialState, action:Types.ModalActionTypes) {
    switch (action.type) {
        case Types.MODAL_SHOW: {
            return {
                ...state,
                action: action.payload.action,
                title: action.payload.title,
                item: action.payload.item,
                isDelete: action.payload.isDelete,
                isVisible: action.payload.isVisible
            }
        }
        case Types.MODAL_HIDE: {
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