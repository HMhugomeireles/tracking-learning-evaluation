import { Shared, INSTANCES } from './util'

export function parseValue(value: any): number {
    if (typeof value !== 'string') {
        return value;
    }

    if (!value.includes('.') && !value.includes(',')) {
        return parseFloat(value.replace(/[^0-9.,]/g, ''))
    }

    const reverseValue = value
        .replace(/[^0-9.,]/g, '') // keep the numbers and dot and comma
        .split('')
        .reverse();

    const decimalPart = [];
    const intPart = [];
    let isDecimalPart = true;
    
    for (let number of reverseValue) {
        if (number === ',' || number === '.') {
            isDecimalPart = false;
        }
        if (isDecimalPart) {
            decimalPart.unshift(number)
            continue;
        }
        if (number !== '.' && number !== ',') {
            intPart.unshift(number)
        }
    }

    const decimalPartValue = decimalPart.join('')
    const domainPartValue = intPart.join('')

    const finalValue = parseFloat(`${domainPartValue}.${decimalPartValue}`)

    if (Shared.appInstanceIsHKIFWD()) {
        return finalValue
    }

    return Number((finalValue).toFixed(2))
    
}

parseValue("HK$1,801.53")
parseValue("HK$1.801,53")
parseValue("HK$145.12")