import * as actions from './actionTypes'
import { getValidatedDate } from '../../../../../utilities/date'

const initialState = {
    header: 'Projects',
    originalHeader: 'Projects',
    description: "Did you create a cool website? Or maybe you're like us and work for the benefit of others? Don't be shy - list it all.",
    projects: [],
    visible: false
}

export default function projects(state = initialState, action) {
    switch (action.type) {
        case actions.PROJECTS_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }

        case actions.PROJECTS_UPDATE_PROJECT: {
            let projectsCopy = [...state.projects]
            projectsCopy[action.payload.id].project = action.payload.project || projectsCopy[action.payload.id].project
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case actions.PROJECTS_UPDATE_COMPANY: {
            let projectsCopy = [...state.projects]
            projectsCopy[action.payload.id].company = action.payload.company || projectsCopy[action.payload.id].company
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case actions.PROJECTS_UPDATE_CITY: {
            let projectsCopy = [...state.projects]
            projectsCopy[action.payload.id].city = action.payload.city || projectsCopy[action.payload.id].city
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case actions.PROJECTS_UPDATE_COUNTRY: {
            let projectsCopy = [...state.projects]
            projectsCopy[action.payload.id].country = action.payload.country || projectsCopy[action.payload.id].country
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case actions.PROJECTS_UPDATE_POSITION: {
            let projectsCopy = [...state.projects]
            projectsCopy[action.payload.id].position = action.payload.position || projectsCopy[action.payload.id].position
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case actions.PROJECTS_UPDATE_FROM_DATE: {
            return {
                ...state,
                projects: getValidatedDate(state.projects, 'fromDate', action)
            }
        }

        case actions.PROJECTS_UPDATE_TO_DATE: {
            return {
                ...state,
                projects: getValidatedDate(state.projects, 'toDate', action)
            }
        }

        case actions.PROJECTS_UPDATE_DESCRIPTION: {
            let projectsCopy = [...state.projects]
            projectsCopy[action.payload.id].description = action.payload.description || projectsCopy[action.payload.id].description
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case actions.PROJECTS_ADD_PROJECT: {
            let projectsCopy = [...state.projects]
            projectsCopy.push({
                project: '',
                company: '',
                city: '',
                country: '',
                position: '',
                fromDateString: '',
                fromDate: '',
                toDateString: '',
                toDate: '',
                description: ''
            })
            return {
                ...state,
                projects: projectsCopy,
                visible: true
            }
        }
        case actions.PROJECTS_DELETE_PROJECT: {
            let projectsCopy = [...state.projects]
            projectsCopy.splice(action.payload.id, 1)
            return {
                ...state,
                projects: projectsCopy,
                visible: projectsCopy.length > 0
            }
        }
        default:
            return state;
    }
}