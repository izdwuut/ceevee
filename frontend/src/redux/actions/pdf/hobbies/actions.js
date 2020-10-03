import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateHobby = (id, hobby) => ({
    type: actions.UPDATE_HOBBY,
    payload: {
        id: id,
        hobby: hobby,
    }
})

export const addHobby = hobby => ({
    type: actions.ADD_HOBBY,
    payload: {
        hobby: hobby
    }
})

export const deleteHobby = id => ({
    type: actions.DELETE_HOBBY,
    payload: {
        id: id
    }
})