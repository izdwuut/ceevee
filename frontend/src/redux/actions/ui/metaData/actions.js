import * as actions from './actionTypes'

export const updateFirstName = firstName => ({
    type: actions.UPDATE_FIRST_NAME,
    payload: {
        firstName: firstName
    }
})

export const updateMiddleName = middleName => ({
    type: actions.UPDATE_MIDDLE_NAME,
    payload: {
        middleName: middleName
    }
})

export const updateLastName = lastName => ({
    type: actions.UPDATE_LAST_NAME,
    payload: {
        lastName: lastName
    }
})

export const updatePosition = position => ({
    type: actions.UPDATE_POSITION,
    payload: {
        position: position
    }
})

export const updateEmail = email => ({
    type: actions.UPDATE_EMAIL,
    payload: {
        email: email
    }
})

export const updateMobile = mobile => ({
    type: actions.UPDATE_MOBILE,
    payload: {
        mobile: mobile
    }
})

export const updateCountry = country => ({
    type: actions.UPDATE_COUNTRY,
    payload: {
        country: country
    }
})

export const updateCity = city => ({
    type: actions.UPDATE_CITY,
    payload: {
        city: city
    }
})

export const updateDrivingLicense = drivingLicense => ({
    type: actions.UPDATE_DRIVING_LICENSE,
    payload: {
        drivingLicense: drivingLicense
    }
})

export const updateBirthDate = birthDate => ({
    type: actions.UPDATE_BIRTH_DATE,
    payload: {
        birthDate: birthDate
    }
})
