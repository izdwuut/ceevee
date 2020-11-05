export const SKILLS_UPDATE_HEADER = 'SKILLS_UPDATE_HEADER'
export const SKILLS_UPDATE_SKILL = 'SKILLS_UPDATE_SKILL'
export const SKILLS_UPDATE_DESCRIPTION = 'SKILLS_UPDATE_DESCRIPTION'
export const SKILLS_ADD_SKILL = 'SKILLS_ADD_SKILL'
export const SKILLS_DELETE_SKILL = 'SKILLS_DELETE_SKILL'

export interface Skill {
    skill: string,
    description: string
}

export interface SkillsState {
    header: string,
    description: string,
    skills: Array<Skill>,
    visible: boolean
}

export interface UpdateHeaderAction {
    type: typeof SKILLS_UPDATE_HEADER,
    payload: {
        header: string
    }
}

export interface UpdateSkillAction {
    type: typeof SKILLS_UPDATE_SKILL,
    payload: {
        id: number,
        skill: string,
    }
}

export interface UpdateDescriptionAction {
    type: typeof SKILLS_UPDATE_DESCRIPTION,
    payload: {
        id: number,
        description: string
    }
}

export interface AddSkillAction {
    type: typeof SKILLS_ADD_SKILL,
}

export interface DeleteSkillAction {
    type: typeof SKILLS_DELETE_SKILL,
    payload: {
        id: number
    }
}

export type SkillsActionTypes = UpdateHeaderAction | UpdateSkillAction | UpdateDescriptionAction | AddSkillAction | DeleteSkillAction