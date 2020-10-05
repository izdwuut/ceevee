import {monthNames} from './variables'
export default function getDateString(date) {
    return monthNames[date.getMonth()] + ' ' + date.getFullYear() 
}