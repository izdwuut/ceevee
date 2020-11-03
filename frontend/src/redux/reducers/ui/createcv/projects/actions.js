import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.PROJECTS_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateProject = (id, project) => ({
    type: actions.PROJECTS_UPDATE_PROJECT,
    payload: {
        id: id,
        project: project,
    }
})

export const updateCompany = (id, company) => ({
    type: actions.PROJECTS_UPDATE_COMPANY,
    payload: {
        id: id,
        company: company
    }
})

export const updateCity = (id, city) => ({
    type: actions.PROJECTS_UPDATE_CITY,
    payload: {
        id: id,
        city: city
    }
})

export const updateCountry = (id, country) => ({
    type: actions.PROJECTS_UPDATE_COUNTRY,
    payload: {
        id: id,
        country: country
    }
})

export const updatePosition = (id, position) => ({
    type: actions.PROJECTS_UPDATE_POSITION,
    payload: {
        id: id,
        position: position
    }
})

export const updateFromDate = (id, fromDateString) => ({
    type: actions.PROJECTS_UPDATE_FROM_DATE,
    payload: {
        id: id,
        fromDateString: fromDateString
    }
})

export const updateToDate = (id, toDateString) => ({
    type: actions.PROJECTS_UPDATE_TO_DATE,
    payload: {
        id: id,
        toDateString: toDateString
    }
})

export const updateDescription = (id, description) => ({
    type: actions.PROJECTS_UPDATE_DESCRIPTION,
    payload: {
        id: id,
        description: description
    }
})

export const deleteProject = id => ({
    type: actions.PROJECTS_DELETE_PROJECT,
    payload: {
        id: id,
    }
})

export const addProject = () => ({
    type: actions.PROJECTS_ADD_PROJECT,
    payload: {

    }
})