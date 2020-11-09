import * as Types from './types'

const initialState: Types.GDPAState = {
    header: 'GDPA',
    originalHeader: 'GDPA',
    description: "We know. Why even bother? You tell us, the government.",
    gdpa: 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
    originalGdpa: 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
    visible: true
}

export default function gdpa(state: Types.GDPAState = initialState, action: Types.GDPAActionTypes) {
    switch (action.type) {
        case Types.GDPA_UPDATE_GDPA: {
            return {
                ...state,
                gdpa: action.payload.gdpa,
                visible: action.payload.gdpa !== ''
            }
        }
        default:
            return state;
    }
}
