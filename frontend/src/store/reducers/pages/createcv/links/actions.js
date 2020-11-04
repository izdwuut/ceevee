import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.LINKS_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateLabel = (id, label) => ({
    type: actions.LINKS_UPDATE_LABEL,
    payload: {
        id: id,
        label: label
    }
})

export const updateLink = (id, link) => ({
    type: actions.LINKS_UPDATE_LINK,
    payload: {
        id: id,
        link: link
    }
})

export const addLink = () => ({
    type: actions.LINKS_ADD_LINK,
    payload: {
        
    }
})

export const deleteLink = id => ({
    type: actions.LINKS_DELETE_LINK,
    payload: {
        id: id
    }
})

