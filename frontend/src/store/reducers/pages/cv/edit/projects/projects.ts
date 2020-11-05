import * as Types from './types'
import { getValidatedDate } from 'src/utilities/date'

const initialState: Types.ProjectsState = {
    header: 'Projects',
    originalHeader: 'Projects',
    description: "Did you create a cool website? Or maybe you're like us and work for the benefit of others? Don't be shy - list it all.",
    projects: [],
    visible: false
}

export default function projects(state: Types.ProjectsState = initialState, action: Types.ProjectsActionTypes) {
    switch (action.type) {
        case Types.PROJECTS_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }

        case Types.PROJECTS_UPDATE_PROJECT: {
            let projectsCopy: Array<Types.Project> = [...state.projects]
            projectsCopy[action.payload.id].project = action.payload.project
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case Types.PROJECTS_UPDATE_COMPANY: {
            let projectsCopy: Array<Types.Project> = [...state.projects]
            projectsCopy[action.payload.id].company = action.payload.company
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case Types.PROJECTS_UPDATE_CITY: {
            let projectsCopy: Array<Types.Project> = [...state.projects]
            projectsCopy[action.payload.id].city = action.payload.city
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case Types.PROJECTS_UPDATE_COUNTRY: {
            let projectsCopy: Array<Types.Project> = [...state.projects]
            projectsCopy[action.payload.id].country = action.payload.country
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case Types.PROJECTS_UPDATE_POSITION: {
            let projectsCopy: Array<Types.Project> = [...state.projects]
            projectsCopy[action.payload.id].position = action.payload.position
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case Types.PROJECTS_UPDATE_FROM_DATE: {
            return {
                ...state,
                projects: getValidatedDate(state.projects, 'fromDate', action)
            }
        }

        case Types.PROJECTS_UPDATE_TO_DATE: {
            return {
                ...state,
                projects: getValidatedDate(state.projects, 'toDate', action)
            }
        }

        case Types.PROJECTS_UPDATE_DESCRIPTION: {
            let projectsCopy: Array<Types.Project> = [...state.projects]
            projectsCopy[action.payload.id].description = action.payload.description
            return {
                ...state,
                projects: projectsCopy
            }
        }

        case Types.PROJECTS_ADD_PROJECT: {
            let projectsCopy: Array<Types.Project> = [...state.projects]
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
        case Types.PROJECTS_DELETE_PROJECT: {
            let projectsCopy: Array<Types.Project> = [...state.projects]
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