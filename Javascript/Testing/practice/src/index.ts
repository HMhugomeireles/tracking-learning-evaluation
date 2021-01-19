import { Shared, INSTANCES } from './util'

export function parseValue(value: any): number {
    if (typeof value !== 'string') {
        return value;
    }

    // const DECIMAL_PLACES_LENGTH = 2;
    // const DEFAULT_CURRENCY_REGEX_BY_INSTANCE = {
    //     'default': /([^0-9.])/g,
    //     'vi-VN': /[^0-9]/g
    // };
    // const instance = Shared.getCountryAppInstanceCode();

    // const REGEX = DEFAULT_CURRENCY_REGEX_BY_INSTANCE[instance]
    //     || DEFAULT_CURRENCY_REGEX_BY_INSTANCE.default;

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
    let domainPart = [];
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
            domainPart.push(reverseValue[number])
        }
    }

    const decimalPartValue = decimalPart.reverse().join('')
    const domainPartValue = domainPart.reverse().join('')

    const finalValue = parseFloat(`${domainPartValue}.${decimalPartValue}`)

    if (Shared.appInstanceIsHKIFWD()) {
        return finalValue
    }

    return Math.round(finalValue)

    // // Fix necessary for mobile devices (DESKTOP => HK1,000.57) (MOBILE => HK1000,57)
    // const valueAfterComma = value.substring(value.indexOf(',') + 1);

    // const parsed = (valueAfterComma.length <= DECIMAL_PLACES_LENGTH)
    //     ? parseFloat(value.replace(/./g, '').replace(',', '.').replace(/([^0-9.])/g, ''))
    //     : parseFloat(value.replace(REGEX, ''));

    // if (Shared.appInstanceIsHKIFWD()) {
    //     return parsed;
    // }

    //return Math.round(parsed);
    
}

parseValue("HK$1,801.53")
parseValue("HK$1.801,53")
parseValue("HK$145.12")