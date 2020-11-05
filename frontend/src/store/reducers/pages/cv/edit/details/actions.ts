import * as Types from './types'

export const updateHeader = (header: string): Types.UpdateHeaderAction => ({
    type: Types.DETAILS_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updateFirstName = (firstName: string): Types.UpdateFirstNameAction => ({
    type: Types.DETAILS_UPDATE_FIRST_NAME,
    payload: {
        firstName: firstName
    }
})

export const updateMiddleName = (middleName: string): Types.UpdateMiddleNameAction => ({
    type: Types.DETAILS_UPDATE_MIDDLE_NAME,
    payload: {
        middleName: middleName
    }
})

export const updateLastName = (lastName: string): Types.UpdateLastNameAction => ({
    type: Types.DETAILS_UPDATE_LAST_NAME,
    payload: {
        lastName: lastName
    }
})

export const updatePosition = (position: string): Types.UpdatePositionAction => ({
    type: Types.DETAILS_UPDATE_POSITION,
    payload: {
        position: position
    }
})

export const updateEmail = (email: string): Types.UpdateEmailAction => ({
    type: Types.DETAILS_UPDATE_EMAIL,
    payload: {
        email: email
    }
})

export const updateMobile = (mobile: string): Types.UpdateMobileAction => ({
    type: Types.DETAILS_UPDATE_MOBILE,
    payload: {
        mobile: mobile
    }
})

export const updateCountry = (country: string): Types.UpdateCountryAction => ({
    type: Types.DETAILS_UPDATE_COUNTRY,
    payload: {
        country: country
    }
})

export const updateCity = (city: string): Types.UpdateCityAction => ({
    type: Types.DETAILS_UPDATE_CITY,
    payload: {
        city: city
    }
})

export const updateDrivingLicense = (drivingLicense: string): Types.UpdateDrivingLicenseAction => ({
    type: Types.DETAILS_UPDATE_DRIVING_LICENSE,
    payload: {
        drivingLicense: drivingLicense
    }
})

export const updateBirthDate = (birthDate: string): Types.UpdateBirthDateAction => ({
    type: Types.DETAILS_UPDATE_BIRTH_DATE,
    payload: {
        birthDate: birthDate
    }
})