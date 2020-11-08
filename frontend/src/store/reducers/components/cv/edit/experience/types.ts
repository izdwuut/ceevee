export const EXPERIENCE_UPDATE_HEADER = 'EXPERIENCE_UPDATE_HEADER'
export const EXPERIENCE_UPDATE_POSITION = 'EXPERIENCE_UPDATE_POSITION'
export const EXPERIENCE_UPDATE_COMPANY = 'EXPERIENCE_UPDATE_COMPANY'
export const EXPERIENCE_UPDATE_CITY = 'EXPERIENCE_UPDATE_CITY'
export const EXPERIENCE_UPDATE_COUNTRY = 'EXPERIENCE_UPDATE_COUNTRY'
export const EXPERIENCE_UPDATE_FROM_DATE = 'EXPERIENCE_UPDATE_FROM_DATE'
export const EXPERIENCE_UPDATE_TO_DATE = 'EXPERIENCE_UPDATE_TO_DATE'
export const EXPERIENCE_UPDATE_DESCRIPTION = 'EXPERIENCE_UPDATE_DESCRIPTION'
export const EXPERIENCE_DELETE_EXPERIENCE = 'EXPERIENCE_DELETE_EXPERIENCE'
export const EXPERIENCE_ADD_EXPERIENCE = 'EXPERIENCE_ADD_EXPERIENCE'

export interface Experience {
    position: string,
    company: string,
    city: string,
    country: string,
    fromDate: string,
    toDate: string,
    fromDateString: string,
    toDateString: string,
    description: string,
}

export interface ExperienceState {
    header: string,
    description: string,
    originalHeader: string,
    experience: Array<Experience>,
    visible: boolean
}

export interface UpdateHeaderAction {
    type: typeof EXPERIENCE_UPDATE_HEADER,
    payload: {
        header: string
    }
}

export interface UpdatePositionAction {
    type: typeof EXPERIENCE_UPDATE_POSITION,
    payload: {
        id: number,
        position: string,
    }
}

export interface UpdateCompanyAction {
    type: typeof EXPERIENCE_UPDATE_COMPANY,
    payload: {
        id: number,
        company: string,
    }
}

export interface UpdateCityAction {
    type: typeof EXPERIENCE_UPDATE_CITY,
    payload: {
        id: number,
        city: string,
    }
}

export interface UpdateCountryAction {
    type: typeof EXPERIENCE_UPDATE_COUNTRY,
    payload: {
        id: number,
        country: string,
    }
}

export interface UpdateFromDateAction {
    type: typeof EXPERIENCE_UPDATE_FROM_DATE,
    payload: {
        id: number,
        fromDateString: string,
    }
}

export interface UpdateToDateAction {
    type: typeof EXPERIENCE_UPDATE_TO_DATE,
    payload: {
        id: number,
        toDateString: string,
    }
}

export interface UpdateDescriptionAction {
    type: typeof EXPERIENCE_UPDATE_DESCRIPTION,
    payload: {
        id: number,
        description: string,
    }
}

export interface DeleteExperienceAction {
    type: typeof EXPERIENCE_DELETE_EXPERIENCE,
    payload: {
        id: number,
    }
}

export interface AddExperienceAction {
    type: typeof EXPERIENCE_ADD_EXPERIENCE,
}

export type ExperienceActionTypes = UpdateHeaderAction | UpdatePositionAction | UpdateCompanyAction | UpdateCityAction | UpdateCountryAction | UpdateFromDateAction | UpdateToDateAction | UpdateDescriptionAction | DeleteExperienceAction | AddExperienceAction
