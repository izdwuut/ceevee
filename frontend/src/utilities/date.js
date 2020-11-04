import { monthNames, formatterDateFormat } from './variables'
import moment from 'moment'
export function getShortDateString(dateString) {
    if (!isDateValid(dateString)) {
        return dateString
    }
    let date = null
    if (moment(dateString, formatterDateFormat, true).isValid()) {
        date = moment(dateString, formatterDateFormat, true)
    } else {
        date = moment(dateString)
    }
    return monthNames[date.month()] + ' ' + date.year()
}

export function isDateValid(dateString) {
    if (moment(new Date(dateString), formatterDateFormat, true).isValid() || moment(dateString, formatterDateFormat, true).isValid()) {
        return true
    }
    return false
}

export function getValidatedDate(props, prop, action) {
    let propsCopy = [...props]
    if (isDateValid(action.payload[prop + 'String'])) {
        if (isNaN(new Date(action.payload[prop + 'String']))) {
            propsCopy[action.payload.id][prop + 'String'] = action.payload[prop + 'String']
        } else {
            propsCopy[action.payload.id][prop + 'String'] = getShortDateString(action.payload[prop + 'String'])
        }
        propsCopy[action.payload.id][prop] = moment(propsCopy[action.payload.id][prop + 'String'], formatterDateFormat).toDate()
    } else {
        propsCopy[action.payload.id][prop + 'String'] = action.payload[prop + 'String']
    }
    return propsCopy
}