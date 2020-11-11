export const DETAILS_UPDATE_HEADER = 'DETAILS_UPDATE_HEADER'
export const DETAILS_UPDATE_FIRST_NAME = 'DETAILS_UPDATE_FIRST_NAME'
export const DETAILS_UPDATE_MIDDLE_NAME = 'DETAILS_UPDATE_MIDDLE_NAME'
export const DETAILS_UPDATE_LAST_NAME = 'DETAILS_UPDATE_LAST_NAME'
export const DETAILS_UPDATE_POSITION = 'DETAILS_UPDATE_POSITION'
export const DETAILS_UPDATE_EMAIL = 'DETAILS_UPDATE_EMAIL'
export const DETAILS_UPDATE_MOBILE = 'DETAILS_UPDATE_MOBILE'
export const DETAILS_UPDATE_COUNTRY = 'DETAILS_UPDATE_COUNTRY'
export const DETAILS_UPDATE_CITY = 'DETAILS_UPDATE_CITY'
export const DETAILS_UPDATE_DRIVING_LICENSE = 'DETAILS_UPDATE_DRIVING_LICENSE'
export const DETAILS_UPDATE_BIRTH_DATE = 'DETAILS_UPDATE_BIRTH_DATE'

export interface DetailsState {
    header: string,
    description: string,
    firstName: string,
    middleName: string,
    lastName: string,
    position: string,
    email: string,
    mobile: string,
    country: string,
    city: string,
    drivingLicense: string,
    birthDate: string
}

export interface UpdateHeaderAction {
    type: typeof DETAILS_UPDATE_HEADER,
    payload: {
        header: string
    }
}


export interface UpdateFirstNameAction {
    type: typeof DETAILS_UPDATE_FIRST_NAME,
    payload: {
        firstName: string
    }
}

export interface UpdateMiddleNameAction {
    type: typeof DETAILS_UPDATE_MIDDLE_NAME,
    payload: {
        middleName: string
    }
}

export interface UpdateLastNameAction {
    type: typeof DETAILS_UPDATE_LAST_NAME,
    payload: {
        lastName: string
    }
}

export interface UpdatePositionAction {
    type: typeof DETAILS_UPDATE_POSITION,
    payload: {
        position: string
    }
}

export interface UpdateEmailAction {
    type: typeof DETAILS_UPDATE_EMAIL,
    payload: {
        email: string
    }
}

export interface UpdateMobileAction {
    type: typeof DETAILS_UPDATE_MOBILE,
    payload: {
        mobile: string
    }
}

export interface UpdateCountryAction {
    type: typeof DETAILS_UPDATE_COUNTRY,
    payload: {
        country: string
    }
}

export interface UpdateCityAction {
    type: typeof DETAILS_UPDATE_CITY,
    payload: {
        city: string
    }
}

export interface UpdateDrivingLicenseAction {
    type: typeof DETAILS_UPDATE_DRIVING_LICENSE,
    payload: {
        drivingLicense: string
    }
}

export interface UpdateBirthDateAction {
    type: typeof DETAILS_UPDATE_BIRTH_DATE,
    payload: {
        birthDate: string
    }
}

export type DetailsActionTypes = UpdateFirstNameAction | UpdateMiddleNameAction | UpdateLastNameAction | UpdatePositionAction | UpdateEmailAction | UpdateMobileAction | UpdateCountryAction | UpdateCityAction | UpdateDrivingLicenseAction | UpdateBirthDateAction