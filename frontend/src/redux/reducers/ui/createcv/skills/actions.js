import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.SKILLS_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateSkill = (id, skill) => ({
    type: actions.SKILLS_UPDATE_SKILL,
    payload: {
        id: id,
        skill: skill,
    }
})

export const updateDescription = (id, description) => ({
    type: actions.SKILLS_UPDATE_DESCRIPTION,
    payload: {
        id: id,
        description: description
    }
})

export const addSkill = () => ({
    type: actions.SKILLS_ADD_SKILL,
    payload: {
    }
})

export const deleteSkill = id => ({
    type: actions.SKILLS_DELETE_SKILL,
    payload: {
        id: id
    }
})