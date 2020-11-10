export const MODAL_SHOW = 'MODAL_SHOW'
export const MODAL_HIDE = 'MODAL_HIDE'

export interface Action {
    (): void
}

export interface ModalState {
    action: Action,
    title: string,
    item: string,
    isDelete: boolean,
    isVisible: boolean
}

export interface ShowModalAction {
    type: typeof MODAL_SHOW,
    payload: ModalState
}

export interface HideModalAction {
    type: typeof MODAL_HIDE,
    payload: ModalState
}

export type ModalActionTypes = ShowModalAction | HideModalAction 
