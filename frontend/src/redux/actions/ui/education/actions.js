import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.EDUCATION_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateSchool = (id, school) => ({
    type: actions.EDUCATION_UPDATE_SCHOOL,
    payload: {
        id: id,
        school: school
    }
})

export const updateTitle = (id, title) => ({
    type: actions.EDUCATION_UPDATE_TITLE,
    payload: {
        id: id,
        title: title
    }
})

export const updateCity = (id, city) => ({
    type: actions.EDUCATION_UPDATE_CITY,
    payload: {
        id: id,
        city: city
    }
})

export const updateCountry = (id, country) => ({
    type: actions.EDUCATION_UPDATE_COUNTRY,
    payload: {
        id: id,
        country: country
    }
})

export const updateFrom = (id, from) => ({
    type: actions.EDUCATION_UPDATE_from,
    payload: {
        id: id,
        from: from
    }
})

export const updateTo = (id, to) => ({
    type: actions.EDUCATION_UPDATE_TO,
    payload: {
        id: id,
        to: to
    }
})

export const updateDescription = (id, description) => ({
    type: actions.EDUCATION_UPDATE_DESRIPTION,
    payload: {
        id: id,
        description: description
    }
})

export const deleteEducation = id => ({
    type: actions.EDUCATION_DELETE_EDUCATION,
    payload: {
        id: id,
    }
})

export const addEducation = () => ({
    type: actions.EDUCATION_ADD_EDUCATION,
    payload: {
        
    }
})