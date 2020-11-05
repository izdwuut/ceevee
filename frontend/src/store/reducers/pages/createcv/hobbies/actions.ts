import * as Types from './types'

export const updateHeader = (header: string): Types.UpdateHeaderAction => ({
    type: Types.HOBBIES_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateHobby = (id:number, hobby:string):Types.UpdateHobbyAction => ({
    type: Types.HOBBIES_UPDATE_HOBBY,
    payload: {
        id: id,
        hobby: hobby,
    }
})

export const addHobby = (hobby:string):Types.AddHobbyAction => ({
    type: Types.HOBBIES_ADD_HOBBY,
})

export const deleteHobby = (id:number):Types.DeleteHobbyAction => ({
    type: Types.HOBBIES_DELETE_HOBBY,
    payload: {
        id: id
    }
})
