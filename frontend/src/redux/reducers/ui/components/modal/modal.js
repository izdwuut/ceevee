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
        case actions.MODAL_SHOW || actions.MODAL_HIDE: {
            return {
                ...state,
                action: action.action,
                title: action.title,
                item: action.item,
                isDelete: action.isDelete,
                modalType: action.modalType,
                actionButtonVariant: action.actionButtonVariant,
                isVisible: action.isVisible
            }
        }

        default:
            return state;
    }
}