import * as actions from './actionTypes'

export const updateHeader = header => ({
    type: actions.METADATA_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateFirstName = firstName => ({
    type: actions.METADATA_UPDATE_FIRST_NAME,
    payload: {
        firstName: firstName
    }
})

export const updateMiddleName = middleName => ({
    type: actions.METADATA_UPDATE_MIDDLE_NAME,
    payload: {
        middleName: middleName
    }
})

export const updateLastName = lastName => ({
    type: actions.METADATA_UPDATE_LAST_NAME,
    payload: {
        lastName: lastName
    }
})

export const updatePosition = position => ({
    type: actions.METADATA_UPDATE_POSITION,
    payload: {
        position: position
    }
})

export const updateEmail = email => ({
    type: actions.METADATA_UPDATE_EMAIL,
    payload: {
        email: email
    }
})

export const updateMobile = mobile => ({
    type: actions.METADATA_UPDATE_MOBILE,
    payload: {
        mobile: mobile
    }
})

export const updateCountry = country => ({
    type: actions.METADATA_UPDATE_COUNTRY,
    payload: {
        country: country
    }
})

export const updateCity = city => ({
    type: actions.METADATA_UPDATE_CITY,
    payload: {
        city: city
    }
})

export const updateDrivingLicense = drivingLicense => ({
    type: actions.METADATA_UPDATE_DRIVING_LICENSE,
    payload: {
        drivingLicense: drivingLicense
    }
})

export const updateBirthDate = birthDate => ({
    type: actions.METADATA_UPDATE_BIRTH_DATE,
    payload: {
        birthDate: birthDate
    }
})