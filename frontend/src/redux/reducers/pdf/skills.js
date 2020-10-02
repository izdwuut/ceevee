import * as actions from '../../actions/pdf/skills/actionTypes'

const initialState = {
    header: 'Lorem',
    skills: [
    ],
    visible: false
}

export default function skills(state = initialState, action) {
    switch (action.type) {
        case actions.UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }
        case actions.UPDATE_SKILL: {
            let skillsCopy = [...state.skills]
            skillsCopy[action.payload.id] = {
                skill: action.payload.skill || skillsCopy[action.payload.id].skill,
                description: action.payload.description || skillsCopy[action.payload.id].description
            }
            return {
                ...state,
                skills: skillsCopy
            }
        }
        case actions.ADD_SKILL: {
            let skillsCopy = [...state.skills]
            skillsCopy.push({
                skill: action.payload.skill,
                description: action.payload.description
            })
            return {
                ...state,
                skills: skillsCopy,
                visible: true
            }
        }
        case actions.DELETE_SKILL: {
            let skillsCopy = [...state.skills]
            skillsCopy.splice(action.payload.id, 1)
            console.log(skillsCopy)
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