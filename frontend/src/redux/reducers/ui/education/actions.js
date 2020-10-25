import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.EDUCATION_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateCourse = (id, course) => ({
    type: actions.EDUCATION_UPDATE_COURSE,
    payload: {
        id: id,
        course: course
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

export const updateFromDate = (id, fromDateString) => ({
    type: actions.EDUCATION_UPDATE_FROM_DATE,
    payload: {
        id: id,
        fromDateString: fromDateString
    }
})

export const updateToDate = (id, toDateString) => ({
    type: actions.EDUCATION_UPDATE_TO_DATE,
    payload: {
        id: id,
        toDateString: toDateString
    }
})

export const updateDescription = (id, description) => ({
    type: actions.EDUCATION_UPDATE_DESCRIPTION,
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