import * as Types from './types'

export const updateHeader = (header: string): Types.UpdateHeaderAction => ({
    type: Types.EXPERIENCE_UPDATE_HEADER,
    payload: {
        header: header
    }
})

export const updatePosition = (id: number, position: string): Types.UpdatePositionAction => ({
    type: Types.EXPERIENCE_UPDATE_POSITION,
    payload: {
        id: id,
        position: position,
    }
})

export const updateCompany = (id: number, company: string): Types.UpdateCompanyAction => ({
    type: Types.EXPERIENCE_UPDATE_COMPANY,
    payload: {
        id: id,
        company: company,
    }
})

export const updateCity = (id: number, city: string): Types.UpdateCityAction => ({
    type: Types.EXPERIENCE_UPDATE_CITY,
    payload: {
        id: id,
        city: city,
    }
})

export const updateCountry = (id: number, country: string): Types.UpdateCountryAction => ({
    type: Types.EXPERIENCE_UPDATE_COUNTRY,
    payload: {
        id: id,
        country: country,
    }
})

export const updateFromDate = (id: number, fromDateString: string): Types.UpdateFromDateAction => ({
    type: Types.EXPERIENCE_UPDATE_FROM_DATE,
    payload: {
        id: id,
        fromDateString: fromDateString,
    }
})

export const updateToDate = (id: number, toDateString: string): Types.UpdateToDateAction => ({
    type: Types.EXPERIENCE_UPDATE_TO_DATE,
    payload: {
        id: id,
        toDateString: toDateString,
    }
})

export const updateDescription = (id: number, description: string): Types.UpdateDescriptionAction => ({
    type: Types.EXPERIENCE_UPDATE_DESCRIPTION,
    payload: {
        id: id,
        description: description,
    }
})

export const deleteExperience = (id: number): Types.DeleteExperienceAction => ({
    type: Types.EXPERIENCE_DELETE_EXPERIENCE,
    payload: {
        id: id,
    }
})

export const addExperience = (): Types.AddExperienceAction => ({
    type: Types.EXPERIENCE_ADD_EXPERIENCE,
})