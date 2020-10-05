import {monthNames} from './variables'
export function getShortDateString(dateString) {
    const date = new Date(dateString)
    if(!isDateValid(date)) {
        return ''
    }
    return monthNames[date.getMonth()] + ' ' + date.getFullYear() 
}

export function isDateValid(dateString) {
    if(isNaN(new Date(dateString))) {
        return false
    }
    return true
}