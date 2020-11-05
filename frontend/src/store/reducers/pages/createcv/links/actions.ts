import * as Types from './types'

export const updateHeader = (header: string): Types.UpdateHeaderAction => ({
    type: Types.LINKS_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateLabel = (id: number, label: string): Types.UpdateLabelAction => ({
    type: Types.LINKS_UPDATE_LABEL,
    payload: {
        id: id,
        label: label
    }
})

export const updateLink = (id: number, link: string): Types.UpdateLinkAction => ({
    type: Types.LINKS_UPDATE_LINK,
    payload: {
        id: id,
        link: link
    }
})

export const addLink = (): Types.AddLinkAction => ({
    type: Types.LINKS_ADD_LINK,
})

export const deleteLink = (id: number): Types.DeleteLinkAction => ({
    type: Types.LINKS_DELETE_LINK,
    payload: {
        id: id
    }
})

