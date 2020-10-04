import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateSkill = (id, skill, description) => ({
    type: actions.UPDATE_SKILL,
    payload: {
        id: id,
        skill: skill,
        description: description
    }
})

export const addSkill = (skill, description) => ({
    type: actions.ADD_SKILL,
    payload: {
        skill: skill,
        description: description
    }
})

export const deleteSkill = id => ({
    type: actions.DELETE_SKILL,
    payload: {
        id: id
    }
})