import {monthNames, formatterDateFormat} from './variables'
import moment from 'moment'
export function getShortDateString(dateString) {
    if(!isDateValid(dateString)) {
        return dateString
    }
    let date = null
    if(moment(dateString, formatterDateFormat, true).isValid()) {
        date = moment(dateString, formatterDateFormat, true)
    } else {
        date = moment(dateString)
    }
    return monthNames[date.month()] + ' ' + date.year() 
}

export function isDateValid(dateString) {
    if(moment(new Date(dateString), formatterDateFormat, true).isValid() || moment(dateString, formatterDateFormat, true).isValid()) {
        return true
    }
    return false
}