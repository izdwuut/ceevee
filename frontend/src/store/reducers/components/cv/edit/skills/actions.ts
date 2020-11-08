import * as Types from './types'

export const updateHeader = (header: string): Types.UpdateHeaderAction => ({
    type: Types.SKILLS_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateSkill = (id: number, skill: string): Types.UpdateSkillAction => ({
    type: Types.SKILLS_UPDATE_SKILL,
    payload: {
        id: id,
        skill: skill,
    }
})

export const updateDescription = (id: number, description: string): Types.UpdateDescriptionAction => ({
    type: Types.SKILLS_UPDATE_DESCRIPTION,
    payload: {
        id: id,
        description: description
    }
})

export const addSkill = (): Types.AddSkillAction => ({
    type: Types.SKILLS_ADD_SKILL,
})

export const deleteSkill = (id: number): Types.DeleteSkillAction => ({
    type: Types.SKILLS_DELETE_SKILL,
    payload: {
        id: id
    }
})