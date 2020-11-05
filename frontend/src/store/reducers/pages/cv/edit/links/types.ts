export const LINKS_UPDATE_HEADER = 'LINKS_UPDATE_HEADER'
export const LINKS_UPDATE_LABEL = 'LINKS_UPDATE_LABEL'
export const LINKS_UPDATE_LINK = 'LINKS_UPDATE_LINK'
export const LINKS_ADD_LINK = 'LINKS_ADD_LINK'
export const LINKS_DELETE_LINK = 'LINKS_DELETE_LINK'

export interface Link {
    label: string,
    link: string,
}

export interface LinksState {
    header: string,
    description: string,
    originalHeader: string,
    links: Array<Link>,
    visible: boolean,
}

export interface UpdateHeaderAction {
    type: typeof LINKS_UPDATE_HEADER,
    payload: {
        header: string
    }
}

export interface UpdateLabelAction {
    type: typeof LINKS_UPDATE_LABEL,
    payload: {
        id: number,
        label: string
    }
}

export interface UpdateLinkAction {
    type: typeof LINKS_UPDATE_LINK,
    payload: {
        id: number,
        link: string
    }
}

export interface AddLinkAction {
    type: typeof LINKS_ADD_LINK,
}

export interface DeleteLinkAction {
    type: typeof LINKS_DELETE_LINK,
    payload: {
        id: number
    }
}

export type LinksActionTypes = UpdateHeaderAction | UpdateLabelAction |UpdateLinkAction | AddLinkAction | DeleteLinkAction
