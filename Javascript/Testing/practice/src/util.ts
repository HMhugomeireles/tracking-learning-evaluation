// jest-ignore
const INSTANCES = {
    'vi-VN': 'vi-VN',
    'hk-HK-IBP': 'hk-HK-IBP',
    'hk-HK-IFWD-ECOM': 'hk-HK-IFWD-ECOM',
    'id-ID': 'id-ID',
    'th-TH': 'th-TH',
    'tl-PH': 'tl-PH'
}

const CURRENCY = {
    'vi-VN': '₫',
    'hk-HK-IBP': 'HK$',
    'hk-HK-IFWD-ECOM': 'HK$',
    'id-ID': 'Rp',
    'th-TH': '฿',
    'tl-PH': '₱',
}

let currentInstance = INSTANCES["hk-HK-IFWD-ECOM"]

type InstanceType =  "vi-VN" | "hk-HK-IBP" | "hk-HK-IFWD-ECOM" | "id-ID" | "th-TH" | "tl-PH";

function setCurrentInstance(instance: InstanceType): void {
    currentInstance = INSTANCES[instance]
}

const Shared = {
    getCountryAppInstanceCode: () => currentInstance,
    appInstanceIsHKIFWD: () => INSTANCES["hk-HK-IFWD-ECOM"] === currentInstance,
    appInstanceIsVNIBP: () => INSTANCES["vi-VN"] === currentInstance,
    appInstanceIsID: () => INSTANCES["id-ID"] === currentInstance,
    getCurrencySymbol: () => CURRENCY[currentInstance],
}

export {
    Shared,
    INSTANCES,
    setCurrentInstance,
}