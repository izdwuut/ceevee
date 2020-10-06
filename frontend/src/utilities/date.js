import {monthNames} from './variables'
import moment from 'moment'
export function getShortDateString(dateString) {
    if(!isDateValid(dateString)) {
        return dateString
    }
    let date = null
    if(moment(dateString, 'YYYY MMMM', true).isValid()) {
        date = moment(dateString, 'YYYY MMMM', true)
    } else {
        date = moment(dateString)
    }
    
    return monthNames[date.month()] + ' ' + date.year() 
}

export function isDateValid(dateString) {
    if(moment(new Date(dateString), 'MMMM YYYY', true).isValid()) {
        return true
    }
    if(moment(dateString, 'MMMM YYYY', true).isValid()) {
        return true
    }
    return false
}