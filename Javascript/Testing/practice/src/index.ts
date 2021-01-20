import { Shared, INSTANCES } from './util'

export function parseValue(value: any): number {
    if (typeof value !== 'string') {
        return value;
    }

    const MONEY_SYMBOLS = {
        'hk-HK-IFWD-ECOM': 'HK$',
        'hk-HK-IBP': 'HK$',
        'th-TH': '฿',
        'vi-VN': '₫',
        'id-ID': 'Rp'
    }

    const reverseValue = value
        .replace(`${MONEY_SYMBOLS[Shared.getCountryAppInstanceCode()]}`, '')
        .split('').reverse();

    const decimalPart = [];
    const intPart = [];
    let isDecimalPart = true;
    
    for (let number of reverseValue) {
        if (number === ',' || number === '.') {
            isDecimalPart = false;
        }
        if (isDecimalPart) {
            decimalPart.push(number)
            continue;
        }
        if (number !== '.' && number !== ',') {
            intPart.push(number)
        }
    }

    const decimalPartValue = decimalPart.reverse().join('')
    const domainPartValue = intPart.reverse().join('')

    const finalValue = parseFloat(`${domainPartValue}.${decimalPartValue}`)

    if (Shared.appInstanceIsHKIFWD()) {
        return finalValue
    }

    return Math.round(finalValue)
    
}

parseValue("HK$1,801.53")
parseValue("HK$1.801,53")
parseValue("HK$145.12")