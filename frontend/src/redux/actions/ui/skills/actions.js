import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.SKILLS_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateSkill = (id, skill, description) => ({
    type: actions.SKILLS_UPDATE_SKILL,
    payload: {
        id: id,
        skill: skill,
        description: description
    }
})

export const addSkill = (skill, description) => ({
    type: actions.SKILLS_ADD_SKILL,
    payload: {
        skill: skill,
        description: description
    }
})

export const deleteSkill = id => ({
    type: actions.SKILLS_DELETE_SKILL,
    payload: {
        id: id
    }
})