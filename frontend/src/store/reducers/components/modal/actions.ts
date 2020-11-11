import * as Types from './types'


export const showModal = (action: Types.Action, title: string, item: string, isDelete: boolean = false): Types.ShowModalAction => ({
    type: Types.MODAL_SHOW,
    payload: {
        action: action,
        title: title,
        item: item,
        isDelete: isDelete,
        isVisible: true
    }
})

export const hideModal = (): Types.HideModalAction => ({
    type: Types.MODAL_HIDE,
    payload: {
        action: null,
        title: '',
        item: '',
        isDelete: false,
        isVisible: false
    }
})