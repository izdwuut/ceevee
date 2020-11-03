import * as actions from './actionTypes'


export const showModal = (action, title, item, isDelete = false, modalType='', actionButtonVariant='') => ({
    type: actions.MODAL_SHOW,
    payload: {
        action: action,
        title: title,
        item: item,
        isDelete: isDelete,
        type: modalType,
        variant: actionButtonVariant,
        isVisible: true
    }
})

export const hideModal = () => ({
    type: actions.MODAL_SHOW,
    payload: {
        action: null,
        title: '',
        item: '',
        isDelete: false,
        modalType: '',
        actionButtonVariant: '',
        isVisible: false
    }
})