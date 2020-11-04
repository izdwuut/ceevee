import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.HOBBIES_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateHobby = (id, hobby) => ({
    type: actions.HOBBIES_UPDATE_HOBBY,
    payload: {
        id: id,
        hobby: hobby,
    }
})

export const addHobby = hobby => ({
    type: actions.HOBBIES_ADD_HOBBY,
    payload: {
        hobby: hobby
    }
})

export const deleteHobby = id => ({
    type: actions.HOBBIES_DELETE_HOBBY,
    payload: {
        id: id
    }
})