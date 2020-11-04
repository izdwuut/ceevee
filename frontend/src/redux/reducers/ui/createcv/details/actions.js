import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.DETAILS_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateFirstName = firstName => ({
    type: actions.DETAILS_UPDATE_FIRST_NAME,
    payload: {
        firstName: firstName
    }
})

export const updateMiddleName = middleName => ({
    type: actions.DETAILS_UPDATE_MIDDLE_NAME,
    payload: {
        middleName: middleName
    }
})

export const updateLastName = lastName => ({
    type: actions.DETAILS_UPDATE_LAST_NAME,
    payload: {
        lastName: lastName
    }
})

export const updatePosition = position => ({
    type: actions.DETAILS_UPDATE_POSITION,
    payload: {
        position: position
    }
})

export const updateEmail = email => ({
    type: actions.DETAILS_UPDATE_EMAIL,
    payload: {
        email: email
    }
})

export const updateMobile = mobile => ({
    type: actions.DETAILS_UPDATE_MOBILE,
    payload: {
        mobile: mobile
    }
})

export const updateCountry = country => ({
    type: actions.DETAILS_UPDATE_COUNTRY,
    payload: {
        country: country
    }
})

export const updateCity = city => ({
    type: actions.DETAILS_UPDATE_CITY,
    payload: {
        city: city
    }
})

export const updateDrivingLicense = drivingLicense => ({
    type: actions.DETAILS_UPDATE_DRIVING_LICENSE,
    payload: {
        drivingLicense: drivingLicense
    }
})

export const updateBirthDate = birthDate => ({
    type: actions.DETAILS_UPDATE_BIRTH_DATE,
    payload: {
        birthDate: birthDate
    }
})