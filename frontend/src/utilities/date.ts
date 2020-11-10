import { monthNames, formatterDateFormat } from 'src/env/variables'
import moment from 'moment'

export function getShortDateString(dateString: string): string {
    if (!isDateValid(dateString)) {
        return dateString
    }
    let date: moment.Moment = null
    if (moment(dateString, formatterDateFormat, true).isValid()) {
        date = moment(dateString, formatterDateFormat, true)
    } else {
        date = moment(dateString)
    }
    return monthNames[date.month()] + ' ' + date.year()
}

export function isDateValid(dateString: string): boolean {
    if (moment(new Date(dateString), formatterDateFormat, true).isValid() || moment(dateString, formatterDateFormat, true).isValid()) {
        return true
    }
    return false
}

export function getValidatedDate(props: Array<any>, prop: string, action: any): Array<any> {
    let propsCopy: Array<any> = [...props]
    if (isDateValid(action.payload[prop + 'String'])) {
        if (isNaN(new Date(action.payload[prop + 'String']).getTime())) {
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