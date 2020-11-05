export const PROJECTS_UPDATE_HEADER = 'PROJECTS_UPDATE_HEADER'
export const PROJECTS_UPDATE_PROJECT = 'PROJECTS_UPDATE_PROJECT'
export const PROJECTS_UPDATE_COMPANY = 'PROJECTS_UPDATE_COMPANY'
export const PROJECTS_UPDATE_CITY = 'PROJECTS_UPDATE_CITY'
export const PROJECTS_UPDATE_COUNTRY = 'PROJECTS_UPDATE_COUNTRY'
export const PROJECTS_UPDATE_POSITION = 'PROJECTS_UPDATE_POSITION'
export const PROJECTS_UPDATE_FROM_DATE = 'PROJECTS_UPDATE_FROM_DATE'
export const PROJECTS_UPDATE_TO_DATE = 'PROJECTS_UPDATE_TO_DATE'
export const PROJECTS_UPDATE_DESCRIPTION = 'PROJECTS_UPDATE_DESCRIPTION'
export const PROJECTS_DELETE_PROJECT = 'PROJECTS_DELETE_PROJECT'
export const PROJECTS_ADD_PROJECT = 'PROJECTS_ADD_PROJECT'

export interface Project {
    project: string,
    company: string,
    city: string,
    country: string,
    position: string,
    fromDateString: string,
    fromDate: string,
    toDateString: string,
    toDate: string,
    description: string
}

export interface ProjectsState {
    header: string,
    originalHeader: string,
    description: string,
    projects: Array<Project>,
    visible: boolean
}

export interface UpdateHeaderAction {
    type: typeof PROJECTS_UPDATE_HEADER,
    payload: {
        header: string
    }
}

export interface UpdateProjectAction {
    type: typeof PROJECTS_UPDATE_PROJECT,
    payload: {
        id: number,
        project: string,
    }
}

export interface UpdateCompanyAction {
    type: typeof PROJECTS_UPDATE_COMPANY,
    payload: {
        id: number,
        company: string
    }
}

export interface UpdateCityAction {
    type: typeof PROJECTS_UPDATE_CITY,
    payload: {
        id: number,
        city: string
    }
}

export interface UpdateCountryAction {
    type: typeof PROJECTS_UPDATE_COUNTRY,
    payload: {
        id: number,
        country: string,
    }
}

export interface UpdatePositionAction {
    type: typeof PROJECTS_UPDATE_POSITION,
    payload: {
        id: number,
        position: string
    }
}

export interface UpdateFromDateAction {
    type: typeof PROJECTS_UPDATE_FROM_DATE,
    payload: {
        id: number,
        fromDateString: string
    }
}
export interface UpdateToDateAction {
    type: typeof PROJECTS_UPDATE_TO_DATE,
    payload: {
        id: number,
        toDateString: string
    }
}

export interface UpdateDescriptionAction {
    type: typeof PROJECTS_UPDATE_DESCRIPTION,
    payload: {
        id: number,
        description: string
    }
}

export interface DeleteProjectAction {
    type: typeof PROJECTS_DELETE_PROJECT,
    payload: {
        id: number,
    }
}

export interface AddProjectAction {
    type: typeof PROJECTS_ADD_PROJECT,
}

export type ProjectsActionTypes = UpdateHeaderAction | UpdateProjectAction | UpdateCompanyAction | UpdateCityAction | UpdateCountryAction | UpdatePositionAction | UpdateFromDateAction | UpdateToDateAction | UpdateDescriptionAction | DeleteProjectAction | AddProjectAction
