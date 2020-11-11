export const HOBBIES_UPDATE_HEADER = 'HOBBIES_UPDATE_HEADER'
export const HOBBIES_UPDATE_HOBBY = 'HOBBIES_UPDATE_HOBBY'
export const HOBBIES_ADD_HOBBY = 'HOBBIES_ADD_HOBBY'
export const HOBBIES_DELETE_HOBBY = 'HOBBIES_DELETE_HOBBY'

export interface HobbiesState {
    header: string,
    originalHeader: string,
    description: string,
    hobbies: Array<string>,
    visible: boolean
}

export interface UpdateHeaderAction {
    type: typeof HOBBIES_UPDATE_HEADER,
    payload: {
        header: string
    }
}

export interface UpdateHobbyAction {
    type: typeof HOBBIES_UPDATE_HOBBY,
    payload: {
        id: number,
        hobby: string,
    }
}

export interface AddHobbyAction {
    type: typeof HOBBIES_ADD_HOBBY,
}

export interface DeleteHobbyAction {
    type: typeof HOBBIES_DELETE_HOBBY,
    payload: {
        id: number
    }
}

export type HobbiesActionTypes = UpdateHeaderAction | UpdateHobbyAction | AddHobbyAction | DeleteHobbyAction
