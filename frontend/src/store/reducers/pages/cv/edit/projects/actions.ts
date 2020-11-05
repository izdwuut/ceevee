import * as Types from './types'

export const updateHeader = (header: string): Types.UpdateHeaderAction => ({
    type: Types.PROJECTS_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateProject = (id: number, project: string): Types.UpdateProjectAction => ({
    type: Types.PROJECTS_UPDATE_PROJECT,
    payload: {
        id: id,
        project: project,
    }
})

export const updateCompany = (id: number, company: string): Types.UpdateCompanyAction => ({
    type: Types.PROJECTS_UPDATE_COMPANY,
    payload: {
        id: id,
        company: company
    }
})

export const updateCity = (id: number, city: string): Types.UpdateCityAction => ({
    type: Types.PROJECTS_UPDATE_CITY,
    payload: {
        id: id,
        city: city
    }
})

export const updateCountry = (id: number, country: string): Types.UpdateCountryAction => ({
    type: Types.PROJECTS_UPDATE_COUNTRY,
    payload: {
        id: id,
        country: country
    }
})

export const updatePosition = (id: number, position: string): Types.UpdatePositionAction => ({
    type: Types.PROJECTS_UPDATE_POSITION,
    payload: {
        id: id,
        position: position
    }
})

export const updateFromDate = (id: number, fromDateString: string): Types.UpdateFromDateAction => ({
    type: Types.PROJECTS_UPDATE_FROM_DATE,
    payload: {
        id: id,
        fromDateString: fromDateString
    }
})

export const updateToDate = (id: number, toDateString: string): Types.UpdateToDateAction => ({
    type: Types.PROJECTS_UPDATE_TO_DATE,
    payload: {
        id: id,
        toDateString: toDateString
    }
})

export const updateDescription = (id: number, description: string): Types.UpdateDescriptionAction => ({
    type: Types.PROJECTS_UPDATE_DESCRIPTION,
    payload: {
        id: id,
        description: description
    }
})

export const deleteProject = (id: number): Types.DeleteProjectAction => ({
    type: Types.PROJECTS_DELETE_PROJECT,
    payload: {
        id: id,
    }
})

export const addProject = (): Types.AddProjectAction => ({
    type: Types.PROJECTS_ADD_PROJECT,
})
