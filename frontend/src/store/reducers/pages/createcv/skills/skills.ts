import * as Types from './types'

const initialState: Types.SkillsState = {
    header: 'Skills',
    description: "Soft skills? Hard skills? We got you covered!",
    skills: [],
    visible: false
}

export default function skills(state: Types.SkillsState = initialState, action: Types.SkillsActionTypes) {
    switch (action.type) {
        case Types.SKILLS_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }
        case Types.SKILLS_UPDATE_SKILL: {
            let skillsCopy: Array<Types.Skill> = [...state.skills]
            skillsCopy[action.payload.id].skill = action.payload.skill
            return {
                ...state,
                skills: skillsCopy
            }
        }
        case Types.SKILLS_UPDATE_DESCRIPTION: {
            let skillsCopy: Array<Types.Skill> = [...state.skills]
            skillsCopy[action.payload.id].description = action.payload.description
            return {
                ...state,
                skills: skillsCopy
            }
        }
        case Types.SKILLS_ADD_SKILL: {
            let skillsCopy: Array<Types.Skill> = [...state.skills]
            skillsCopy.push({
                skill: '',
                description: ''
            })
            return {
                ...state,
                skills: skillsCopy,
                visible: true
            }
        }
        case Types.SKILLS_DELETE_SKILL: {
            let skillsCopy: Array<Types.Skill> = [...state.skills]
            skillsCopy.splice(action.payload.id, 1)
            return {
                ...state,
                skills: skillsCopy,
                visible: skillsCopy.length > 0
            }
        }
        default:
            return state;
    }
}