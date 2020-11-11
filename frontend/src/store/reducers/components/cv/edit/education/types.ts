export const EDUCATION_UPDATE_HEADER = 'EDUCATION_UPDATE_HEADER'
export const EDUCATION_UPDATE_SCHOOL = 'EDUCATION_UPDATE_SCHOOL'
export const EDUCATION_UPDATE_COURSE = 'EDUCATION_UPDATE_COURSE'
export const EDUCATION_UPDATE_TITLE = 'EDUCATION_UPDATE_TITLE'
export const EDUCATION_UPDATE_CITY = 'EDUCATION_UPDATE_CITY'
export const EDUCATION_UPDATE_COUNTRY = 'EDUCATION_UPDATE_COUNTRY'
export const EDUCATION_UPDATE_FROM_DATE = 'EDUCATION_UPDATE_FROM'
export const EDUCATION_UPDATE_TO_DATE = 'EDUCATION_UPDATE_TO'
export const EDUCATION_UPDATE_DESCRIPTION = 'EDUCATION_UPDATE_DESCRIPTION'
export const EDUCATION_DELETE_EDUCATION = 'EDUCATION_DELETE_EDUCATION'
export const EDUCATION_ADD_EDUCATION = 'EDUCATION_ADD_EDUCATION'

export interface Education {
    course: string,
    school: string,
    title: string,
    company: string,
    city: string,
    country: string,
    fromDate: string,
    toDate: string,
    fromDateString: string,
    toDateString: string,
    description: string,
}

export interface EducationState {
    header: string,
    description: string,
    originalHeader: string,
    education: Array<Education>,
    visible: boolean,
}

export interface UpdateHeaderAction {
    type: typeof EDUCATION_UPDATE_HEADER,
    payload: {
        header: string
    }
}

export interface UpdateCourseAction {
    type: typeof EDUCATION_UPDATE_COURSE,
    payload: {
        id: number,
        course: string
    }
}

export interface UpdateSchoolAction {
    type: typeof EDUCATION_UPDATE_SCHOOL,
    payload: {
        id: number,
        school: string
    }
}

export interface UpdateTitleAction {
    type: typeof EDUCATION_UPDATE_TITLE,
    payload: {
        id: number,
        title: string
    }
}

export interface UpdateCityAction {
    type: typeof EDUCATION_UPDATE_CITY,
    payload: {
        id: number,
        city: string
    }
}

export interface UpdateCountryAction {
    type: typeof EDUCATION_UPDATE_COUNTRY,
    payload: {
        id: number,
        country: string
    }
}

export interface UpdateFromDateAction {
    type: typeof EDUCATION_UPDATE_FROM_DATE,
    payload: {
        id: number,
        fromDateString: string
    }
}

export interface UpdateToDateAction {
    type: typeof EDUCATION_UPDATE_TO_DATE,
    payload: {
        id: number,
        toDateString: string
    }
}

export interface UpdateDescriptionAction {
    type: typeof EDUCATION_UPDATE_DESCRIPTION,
    payload: {
        id: number,
        description: string
    }
}

export interface DeleteEducationAction {
    type: typeof EDUCATION_DELETE_EDUCATION,
    payload: {
        id: number,
    }
}

export interface AddEducationAction {
    type: typeof EDUCATION_ADD_EDUCATION,
}

export type EducationActionTypes = UpdateHeaderAction | UpdateCourseAction | UpdateSchoolAction |UpdateTitleAction | UpdateCityAction | UpdateCountryAction | UpdateFromDateAction | UpdateToDateAction | UpdateDescriptionAction | DeleteEducationAction | AddEducationAction