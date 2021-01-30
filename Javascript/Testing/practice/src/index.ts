import { Shared, setCurrentInstance } from './util'

export function parseValue(value: any): number {
    if (typeof value !== 'string') {
        return value;
    }

    if (Shared.appInstanceIsVNIBP() || Shared.appInstanceIsID()) {
        const regexStr = Shared.getCurrencySymbol();
        console.log({ value });
        const regex = new RegExp(`([^a-zA-Z${regexStr}]+)`, 'g');
        const realValue = value.match(regex)[0].replace(/,/g, '').replace(/\./g, '');
        return parseFloat(realValue);
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

//setCurrentInstance("hk-HK-IFWD-ECOM")

parseValue("HK$1,801.53")
parseValue("HK$1.801,53")
parseValue("HK$145.12")