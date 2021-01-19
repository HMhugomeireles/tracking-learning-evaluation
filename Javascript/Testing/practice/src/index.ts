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

    let decimalPart = [];
    let intPart = [];
    let isDecimalPart = true;
    
    for (let number = 0; number < reverseValue.length; number++) {
        if (reverseValue[number] === ',' || reverseValue[number] === '.') {
            isDecimalPart = false;
        }
        if (isDecimalPart) {
            decimalPart.push(reverseValue[number])
            continue;
        }
        if (reverseValue[number] !== '.' && reverseValue[number] !== ',') {
            intPart.push(reverseValue[number])
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